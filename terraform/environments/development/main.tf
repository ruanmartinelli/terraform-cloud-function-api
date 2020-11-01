locals {
  env = "development"
  region = "us-central1"
  location = "us-central"
  project = "crispy-barnacle"
}

provider "google" {
  project = local.project
  region  = local.region
}

module "function" {
  source      = "../../modules/function"
  project     = local.project
  name        = "my-function"
  entry_point = "app"
}

module "database" {
  source  = "../../modules/database"
  project = local.project
  location  = local.location
}