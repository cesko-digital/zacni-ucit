# ----------
# ECS deployment to Fargate
# ----------

resource "aws_ecr_repository" "backend-development" {
  name                 = "${var.codename}-backend-development"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}

# -------------
# IAM roles
# -------------

resource "aws_iam_role" "ecr-task-execution-role" {
  name = "${var.codename}-ecr-task-execution-role"

  assume_role_policy = file("roles/ecs-assume.json")
}

resource "aws_iam_role_policy_attachment" "ecr-task-execution-policy-attachment" {
  role       = aws_iam_role.ecr-task-execution-role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

# -------------
# Backend
# -------------

resource "aws_ecs_cluster" "backend-development" {
  name = "${var.codename}-backend-development"
}

resource "aws_ecs_task_definition" "backend-development" {
  family                = "${var.codename}-backend-development"
  container_definitions = templatefile("ecs/backend-development.tmpl", {
    aws-region                 = var.aws-region,
    aws-repository             = aws_ecr_repository.backend-development.repository_url,
    database-name              = aws_db_instance.database.name,
    database-user              = var.database-username,
    database-password          = var.database-password,
    database-host              = aws_db_instance.database.address,
    database-port              = tostring(aws_db_instance.database.port),
    neo4j-host                 = "neo4j.internal.${var.codename-domain}",
    neo4j-port                 = "7474",
    neo4j-password             = var.neo4j-password,
    django-secret              = var.django-secret,
    django-allowed-hosts       = "*",
    django-cors-allowed-origin = "*",
    sendgrid-api-key           = var.sendgrid-api-key
  })
  network_mode          = "awsvpc"
  execution_role_arn    = aws_iam_role.ecr-task-execution-role.arn
  task_role_arn         = aws_iam_role.ecr-task-execution-role.arn
  memory                = "512"
  cpu                   = "256"
}

resource "aws_ecs_service" "backend-development" {
  name                               = "${var.codename}-backend-development"
  cluster                            = aws_ecs_cluster.backend-development.id
  task_definition                    = aws_ecs_task_definition.backend-development.arn
  launch_type                        = "FARGATE"
  desired_count                      = 1
  deployment_minimum_healthy_percent = 100
  deployment_maximum_percent         = 200
  health_check_grace_period_seconds  = 20

  network_configuration {
    subnets          = [
      aws_subnet.private.id
    ]
    security_groups  = [
      aws_security_group.private-default-sg.id
    ]
    assign_public_ip = false
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.backend-development-tg.arn
    container_name   = "zacniucit-backend-development"
    container_port   = 8300
  }
}

resource "aws_cloudwatch_log_group" "backend-development-lg" {
  name = "/ecs/backend-development"
}

# -----------
# Elastic Load balancers
# -----------

resource "aws_eip" "lb-public-ip" {
  vpc = true
}

resource "aws_lb" "elb" {
  name               = "${var.codename}-elb"
  internal           = false
  load_balancer_type = "network"

  subnet_mapping {
    subnet_id     = aws_subnet.public.id
    allocation_id = aws_eip.lb-public-ip.id
  }

  idle_timeout = 400

  tags = {
    Name = "${var.codename}-elb"
  }
}

resource "aws_lb_listener" "backend-development-listener" {
  load_balancer_arn = aws_lb.elb.arn
  port              = "8300"
  protocol          = "TCP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.backend-development-tg.arn
  }
}

resource "aws_lb_target_group" "backend-development-tg" {
  name        = "${var.codename}-backend-development-tg"
  port        = 8300
  protocol    = "TCP"
  vpc_id      = aws_vpc.vpc.id
  target_type = "ip"
}

resource "aws_route53_record" "backend-elb" {
  zone_id = aws_route53_zone.private.id
  name    = "backend"
  type    = "A"

  alias {
    name                   = aws_lb.elb.dns_name
    zone_id                = aws_lb.elb.zone_id
    evaluate_target_health = false
  }
}
