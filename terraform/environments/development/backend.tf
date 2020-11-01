terraform {
  backend "gcs" {
    bucket = "crispy-barnacle-tfstate"
    prefix = "env/development"
  }
}