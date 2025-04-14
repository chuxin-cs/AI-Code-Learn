// react
import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

// components
import { CircleLoading } from '@/components/loading';
const Login = lazy(() => import('@/pages/sys/login'));

export const PUBLIC_ROUTE: RouteObject = {
  element: (
    <Suspense fallback={<CircleLoading />}>
      <Outlet />
    </Suspense>
  ),
  children: [{ path: 'login', element: <Login /> }],
};
