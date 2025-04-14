import { Navigate, createHashRouter, RouterProvider } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
function Router() {
  const routes = [] as RouteObject[];
  const router = createHashRouter(routes);
  return <RouterProvider router={router} />;
}
export default Router;
