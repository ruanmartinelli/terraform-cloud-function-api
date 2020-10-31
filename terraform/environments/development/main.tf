locals {
  env = "development"
}

provider "google" {
  project = var.project
  region  = var.region
}

module "function" {
  source      = "../../modules/function"
  project     = var.project
  name        = "my-function"
  entry_point = "app"
}