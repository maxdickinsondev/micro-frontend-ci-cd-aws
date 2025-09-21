import { LifeCycles, registerApplication } from "single-spa";
import { Apps } from "./types";

export function registerApplications(apps: Apps[]) {
  apps.forEach((app) => {
    registerApplication({
      name: app.package,
      app: () => System.import<LifeCycles>(app.package),
      activeWhen: app.exact
        ? (location) => location.pathname === app.activeWhen
        : app.activeWhen,
    });
  });
}
