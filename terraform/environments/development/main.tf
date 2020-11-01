locals {
  env = "development"
  region = "us-central1"
  location = "us-central"
  project = "myproject-128391204"
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

// module "database" {
//   source  = "../../modules/database"
//   project = local.project
//   region  = local.location
// }