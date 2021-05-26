resource "aws_cloudfront_origin_access_identity" "default" {
  comment = "CloudFront Origin Identity"
}

resource "aws_cloudfront_distribution" "frontend_cloudfront" {
  origin {
    domain_name = aws_s3_bucket.frontend.bucket_domain_name
    origin_id   = "S3-Website-${aws_s3_bucket.frontend.bucket}.${aws_s3_bucket.frontend.website_domain}"
    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.default.cloudfront_access_identity_path
    }
  }

  origin {
    domain_name = replace(aws_api_gateway_deployment.backend-development.invoke_url, "/^https?://([^/]*).*/", "$1")
    origin_id   = aws_api_gateway_deployment.backend-development.id
    origin_path = "/development"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "https-only"
      origin_ssl_protocols   = [
        "TLSv1",
        "TLSv1.1",
        "TLSv1.2"]
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  aliases = [
    "${var.codename}.ceskodigital.net"
  ]

  default_cache_behavior {
    allowed_methods  = [
      "GET",
      "HEAD"]
    cached_methods   = [
      "GET",
      "HEAD"]
    target_origin_id = "S3-Website-${aws_s3_bucket.frontend.bucket}.${aws_s3_bucket.frontend.website_domain}"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
    min_ttl                = 0
    default_ttl            = 86400
    max_ttl                = 86400
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }

  ordered_cache_behavior {
    path_pattern     = "/graphql"
    allowed_methods  = [
      "HEAD",
      "DELETE",
      "POST",
      "GET",
      "OPTIONS",
      "PUT",
      "PATCH"]
    cached_methods   = [
      "GET",
      "HEAD"]
    target_origin_id = aws_api_gateway_deployment.backend-development.id

    forwarded_values {
      query_string = true
      headers      = [
        "Authorization"
      ]
      cookies {
        forward = "all"
      }
    }
    min_ttl                = 0
    default_ttl            = 0
    max_ttl                = 0
    compress               = true
    smooth_streaming       = true
    viewer_protocol_policy = "redirect-to-https"
  }

  price_class = "PriceClass_All"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn            = var.development-domain-certificate-arn
    cloudfront_default_certificate = false
    ssl_support_method             = "sni-only"
    minimum_protocol_version       = "TLSv1.2_2018"
  }

  custom_error_response {
    error_code            = 403
    error_caching_min_ttl = 300
    response_code         = 200
    response_page_path    = "/404.html"
  }
}
