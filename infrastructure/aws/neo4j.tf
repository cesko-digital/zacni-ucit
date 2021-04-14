resource "aws_instance" "neo4j" {
  ami           =  "ami-0bbc6ca7b9305e722"
  instance_type = "t2.medium"
  subnet_id = aws_subnet.private.id
  security_groups = [aws_security_group.private-default-sg.id]

  user_data_base64 = base64encode(templatefile("user_data/neo4j.tmpl", {
    admin_1_public_key = var.admin_1_public_key
  }))

  tags = {
    Name = "${var.codename}-neo4j"
  }
}

