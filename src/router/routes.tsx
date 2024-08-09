import { lazy } from "react";
import { AppRouteObject } from "#/router";

export const HomeRoute: AppRouteObject = {
  path: "/",
  Component: lazy(() => import("@/pages/sys/login/Home")),
};

export const LoginRoute: AppRouteObject = {
  path: "/login",
  Component: lazy(() => import("@/pages/sys/login/Login")),
};
