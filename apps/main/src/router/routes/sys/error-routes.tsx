import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

// components
import { CircleLoading } from '@/components/loading';
import ProtectedRoute from '../../components/protectedRoute';
const Page403 = lazy(() => import('@/pages/sys/error/Page403'));
const Page404 = lazy(() => import('@/pages/sys/error/Page404'));
const Page500 = lazy(() => import('@/pages/sys/error/Page500'));

export const ERROR_ROUTE: RouteObject = {
  element: (
    <ProtectedRoute>
      <Suspense fallback={<CircleLoading />}>
        <Outlet />
      </Suspense>
    </ProtectedRoute>
  ),
  children: [
    { path: '403', element: <Page403 /> },
    { path: '404', element: <Page404 /> },
    { path: '500', element: <Page500 /> },
  ],
};
