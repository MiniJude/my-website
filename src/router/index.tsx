import { lazy } from "react";
import { createHashRouter, RouteObject, RouterProvider } from "react-router-dom";

import { AppRouteObject } from '#/router'

const LoginRoute: AppRouteObject = {
  path: '/login',
  Component: lazy(() => import('@/pages/sys/login/Login')),
}

export default function Router() {
  const routes = [LoginRoute];
  const router = createHashRouter(routes as unknown as RouteObject[]);
  return <RouterProvider router={router} />;
}
