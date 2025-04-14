import { Navigate, createHashRouter, RouterProvider } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import { navigation } from './routes/modules/navigation.tsx';
import { ERROR_ROUTE } from './routes/sys/error-routes.tsx';
export default function Router() {
  const routes = [ERROR_ROUTE, navigation] as RouteObject[];
  const router = createHashRouter(routes);
  return <RouterProvider router={router} ></RouterProvider>;
}
