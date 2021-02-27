# ---------
# Web frontend S3 bucket
# ---------

resource "aws_s3_bucket" "frontend" {
  bucket = var.development-frontend-bucket-name
  acl    = "private"

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }

  website {
    index_document = "index.html"
    error_document = "404.html"
  }
}