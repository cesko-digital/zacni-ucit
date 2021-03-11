terraform {
  required_version = ">= 0.14.7"

  required_providers {
    aws = ">= 3.28.0"
  }

  backend "s3" {
    bucket = "zacniucit-terraform-backend"
    key    = "terraform.tfstate"
    region = "eu-central-1"
  }
}

provider "aws" {
  region = var.aws-region
}

# ----------------
# VPC
# ----------------

resource "aws_vpc" "vpc" {
  cidr_block = "10.0.0.0/16"

  enable_dns_hostnames = true

  tags = {
    Name = var.codename
  }
}

resource "aws_subnet" "private" {
  cidr_block        = "10.0.0.0/20"
  vpc_id            = aws_vpc.vpc.id
  availability_zone = "${var.aws-region}a"

  tags = {
    Name = "${var.codename}-private"
  }
}

resource "aws_subnet" "public" {
  cidr_block        = "10.0.16.0/20"
  vpc_id            = aws_vpc.vpc.id
  availability_zone = "${var.aws-region}a"

  tags = {
    Name = "${var.codename}-public"
  }
}

resource "aws_subnet" "db-private" {
  cidr_block        = "10.0.32.0/20"
  vpc_id            = aws_vpc.vpc.id
  availability_zone = "${var.aws-region}b"

  tags = {
    Name = "${var.codename}-db-private"
  }
}

# ---------
# Internet Gateway
# ---------

resource "aws_internet_gateway" "internet-gateway" {
  vpc_id = aws_vpc.vpc.id
  tags   = {
    Name = "${var.codename}-internet-gateway"
  }
}

# ---------
# NAT Gateway
# ---------

resource "aws_eip" "nat-gateway-ip" {
  vpc = true
}

resource "aws_nat_gateway" "nat-gateway" {
  subnet_id     = aws_subnet.public.id
  allocation_id = aws_eip.nat-gateway-ip.id
}

# Routing table settings, we have 2 routing tables
# 1. public -> have access directly to internet gateway
# 2. private -> is routed to internet via NAT Gateway
#
# There is default table (set as main) without access to internet, only for local routes. Which is good default.
resource "aws_route_table" "public-routes" {
  vpc_id = aws_vpc.vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.internet-gateway.id
  }

  tags = {
    Name = "${var.codename}-public-routes"
  }
}

resource "aws_route_table" "private-routes" {
  vpc_id = aws_vpc.vpc.id

  route {
    cidr_block     = "0.0.0.0/0"
    nat_gateway_id = aws_nat_gateway.nat-gateway.id
  }

  tags = {
    Name = "${var.codename}-private-routes"
  }
}

resource "aws_route_table_association" "private-subnet" {
  route_table_id = aws_route_table.private-routes.id
  subnet_id      = aws_subnet.private.id
}

resource "aws_route_table_association" "public-subnet" {
  route_table_id = aws_route_table.public-routes.id
  subnet_id      = aws_subnet.public.id
}

# -----------
# Security Groups
# -----------

resource "aws_security_group" "private-default-sg" {
  name        = "${var.codename}-private-default-sg"
  description = "Default, fully open SG for private network."
  vpc_id      = aws_vpc.vpc.id

  ingress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = [
      "10.0.0.0/16"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = [
      "0.0.0.0/0"]
  }
}

# --------
# Route53 Internal Zone
# --------

resource "aws_route53_zone" "private" {
  name = "internal.${var.codename-domain}"

  vpc {
    vpc_id = aws_vpc.vpc.id
  }
}

# ----------------
# KMS
# ----------------

resource "aws_kms_alias" "db_enc_key_alias" {
  name          = "alias/db_enc_key"
  target_key_id = aws_kms_key.db_enc_key.id
}

resource "aws_kms_key" "db_enc_key" {
  description = "Database encryption key"
}

# -------
# RDS Database
# -------

resource "aws_db_instance" "database" {
  allocated_storage       = 20
  max_allocated_storage   = 1000
  storage_type            = "gp2"
  engine                  = "postgres"
  engine_version          = "12.4"
  instance_class          = "db.t3.small"
  name                    = "${var.codename}development"
  backup_retention_period = 7

  username = var.database-username
  password = var.database-password

  vpc_security_group_ids = [
    aws_security_group.private-default-sg.id
  ]
  db_subnet_group_name   = aws_db_subnet_group.database.name
  publicly_accessible    = false
  availability_zone      = "${var.aws-region}a"

  storage_encrypted   = true
  kms_key_id          = aws_kms_key.db_enc_key.arn
  deletion_protection = true

  enabled_cloudwatch_logs_exports = [
    "upgrade"
  ]
}

resource "aws_db_subnet_group" "database" {
  name       = "database-subnet-group"
  subnet_ids = [
    aws_subnet.private.id,
    aws_subnet.db-private.id
  ]
}

# DNS record for database
resource "aws_route53_record" "database" {
  zone_id = aws_route53_zone.private.zone_id
  name    = "database"
  type    = "CNAME"
  ttl     = "300"

  records = [
    aws_db_instance.database.address
  ]
}