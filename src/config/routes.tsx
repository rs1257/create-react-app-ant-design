import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Test = lazy(() => import("../components/Test"));

const routes: RouteObject[] = [
  {
    path: "/test",
    element: <Test />,
  },
];

export default routes;
