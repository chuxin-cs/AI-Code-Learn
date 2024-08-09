import {
  createHashRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { LoginRoute } from "./routes";
import { ErrorRoutes } from "./routes/error-routes";

export default function Router() {
  const routes = [LoginRoute, ErrorRoutes];
  const router = createHashRouter(routes as unknown as RouteObject[]);
  return <RouterProvider router={router} />;
}
