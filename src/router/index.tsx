import {
  createHashRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { LoginRoute } from "./routes";
import { ErrorRoutes } from "./routes/error-routes";
import { AppRouteObject } from "#/router";
import DashboardLayout from "@/layouts/dashboard";

const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;

export default function Router() {
  const asyncRoutes: AppRouteObject = {
    path: "/",
    element: <DashboardLayout />,
    children: [{ index: true, element: <Navigate to={HOMEPAGE} replace /> }],
  };

  const routes = [LoginRoute, asyncRoutes, ErrorRoutes];
  const router = createHashRouter(routes as unknown as RouteObject[]);
  return <RouterProvider router={router} />;
}
