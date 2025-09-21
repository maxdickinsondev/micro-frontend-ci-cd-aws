import { start } from "single-spa";
import { fetchApplications } from "./fetch-applications";

fetchApplications();
start({
  urlRerouteOnly: true,
});
