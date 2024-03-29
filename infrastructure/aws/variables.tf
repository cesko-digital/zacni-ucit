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
