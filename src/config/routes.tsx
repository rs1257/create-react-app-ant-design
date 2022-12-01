import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const StatusView = lazy(() => import('../pages/StatusView'));
const InstantaneousView = lazy(() => import('../pages/InstantaneousView'));
const UserDefinedDownload = lazy(() => import('../pages/UserDefinedDownload'));
const DataItemExplorer = lazy(() => import('../pages/DataItemExplorer'));
const ReportExplorer = lazy(() => import('../pages/ReportExplorer'));
const Links = lazy(() => import('../pages/Links'));
const EntryZoneGraphs = lazy(() => import('../pages/EntryZoneGraphs'));
const PageNotFound = lazy(() => import('../pages/Error/PageNotFound'));

type CustomRouteObject = RouteObject & {
  hideHeader?: boolean;
  hideFooter?: boolean;
};

const routes: CustomRouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/StatusView',
    element: <StatusView />,
  },
  {
    path: '/InstantaneousView',
    element: <InstantaneousView />,
  },
  {
    path: '/UserDefinedDownload',
    element: <UserDefinedDownload />,
  },
  {
    path: '/DataItemExplorer',
    element: <DataItemExplorer />,
  },
  {
    path: '/ReportExplorer',
    element: <ReportExplorer />,
  },
  {
    path: '/Links',
    element: <Links />,
  },
  {
    path: '/EntryZoneGraphs',
    element: <EntryZoneGraphs />,
  },
  { path: '*', element: <PageNotFound /> },
];

export default routes;
