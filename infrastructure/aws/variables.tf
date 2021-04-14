variable "aws-region" {
  type    = string
  default = "eu-central-1"
}

variable "codename" {
  type    = string
  default = "zacniucit"
}

# Internal domain, its not visible publicly, but it should be domain we own
# to comply with best practices => it ensures the internal domain names are globally unique.
variable "codename-domain" {
  type    = string
  default = "zacniucit.cz"
}

variable "database-username" {
  type    = string
  default = "zacniucitdevelopment"
}

variable "database-password" {
  type = string
}

variable "neo4j-password" {
  type = string
}

variable "django-secret" {
  type = string
}

variable "sendgrid-api-key" {
  type = string
}

variable "development-frontend-bucket-name" {
  type    = string
  default = "zacniucit-frontend-development"
}

variable "development-domain-certificate-arn" {
  type = string
  default = "arn:aws:acm:us-east-1:313370994665:certificate/92346f6e-1016-4471-834a-a9c12ab70663"
}

variable "admin_1_public_key" {
  type    = string
  default = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDEeeH3pe0IKz2OE4jVxYKycwhz4Vywkcima+vk0XF/oqMSc+uR5Dqw7/y3/4yysch3+/adeIfY6Vb11akZvCcS22/1O9EtpHupB2noRLgcOCBhRwBR+EGgUrhcMWEzJ8yNaqpC2Z8GvhJcO7F3rlktISVh/GOXI/91KcapU3v9I+ASELbCaQm9mdNQBvf2vyRzWhRW18bgi43r9RmwPNI3B/xJIkYFFa7OnUBGTvi1PW9X8ZQkDGwTT0b4fAKP4tl6UaXOkF3vpIT1gmyL4jiZccDKFJkKdTxtyt67lON22MWKmjrCs8nASX4syyefAbA3tHREYdPeZJTtx95r3Puv"
}
