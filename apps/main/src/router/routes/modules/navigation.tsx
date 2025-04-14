// react
import { Suspense, lazy } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

// components
import { CircleLoading } from '@/components/loading';
const NavigationPage = lazy(() => import('@/pages/navigation'));

export const navigation: RouteObject = {
  path: '/',
  element: (
    <Suspense fallback={<CircleLoading />}>
      <Outlet />
    </Suspense>
  ),
  children: [
    {
      index: true,
      element: <Navigate to='navigation' replace />,
    },
    {
      path: 'navigation',
      element: <NavigationPage />,
      meta: { key: '/navigation' },
    },
  ],
};
