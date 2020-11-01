# Enable Firestore API
resource "google_project_service" "db" {
  project = var.project
  service = "firestore.googleapis.com"

  disable_dependent_services = true
  disable_on_destroy         = false
}

resource "google_app_engine_application" "app" {
  project       = var.project
  location_id   = var.location
  database_type = "CLOUD_FIRESTORE"
}