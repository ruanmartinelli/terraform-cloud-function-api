locals {
  env = "production"
}

provider "google" {
  project = var.project
  region  = var.region
}

module "function" {
  source      = "../../modules/function"
  project     = var.project
  name        = "production-app"
  entry_point = "app"
}