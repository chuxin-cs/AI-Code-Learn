import { lazy } from "react";
import { AppRouteObject } from "#/router";

export const LoginRoute: AppRouteObject = {
  path: "/login",
  Component: lazy(() => import("@/pages/sys/login/Login")),
};
