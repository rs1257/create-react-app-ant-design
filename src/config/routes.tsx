import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Test = lazy(() => import('../components/Test'));
const PageNotFound = lazy(() => import('../pages/Error/PageNotFound'));

const routes: RouteObject[] = [
  {
    path: '/test',
    element: <Test />,
  },
  { path: '*', element: <PageNotFound /> },
];

export default routes;
