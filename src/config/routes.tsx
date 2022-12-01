import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Test = lazy(() => import('../components/Test'));
const PageNotFound = lazy(() => import('../pages/Error/PageNotFound'));

type CustomRouteObject = RouteObject & {
  hideHeader?: boolean;
  hideFooter?: boolean;
};

const routes: CustomRouteObject[] = [
  {
    path: '/',
    element: <Test />,
  },
  {
    path: '/StatusView',
    element: <Test />,
  },
  {
    path: '/InstantaneousView',
    element: <Test />,
  },
  {
    path: '/UserDefinedDownload',
    element: <Test />,
  },
  {
    path: '/DataItemExplorer',
    element: <Test />,
  },
  {
    path: '/ReportExplorer',
    element: <Test />,
  },
  {
    path: '/Links',
    element: <Test />,
  },
  {
    path: '/EntryZoneGraphs',
    element: <Test />,
  },
  {
    path: '/EntryZoneGraphsPage',
    element: <Test />,
  },
  { path: '*', element: <PageNotFound /> },
];

export default routes;
