import { registerApplications } from "./register-applications";

export function fetchApplications() {
  fetch("https://store.maxdickinson.com/config/application.json")
    .then((response) => response.json())
    .then((response) => registerApplications(response.applications));
}
