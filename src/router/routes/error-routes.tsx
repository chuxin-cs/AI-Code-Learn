import { Suspense, lazy } from "react";
import { AppRouteObject } from "#/router";
import { Outlet } from "react-router-dom";

const Page403 = lazy(() => import("@/pages/sys/error/Page403"));
const Page404 = lazy(() => import("@/pages/sys/error/Page404"));
const Page500 = lazy(() => import("@/pages/sys/error/Page500"));

export const ErrorRoutes: AppRouteObject = {
  element: (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  ),
  children: [
    { path: "403", element: <Page403 /> },
    { path: "404", element: <Page404 /> },
    { path: "500", element: <Page500 /> },
  ],
};
