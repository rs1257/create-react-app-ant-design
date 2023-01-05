import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
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
  hideSidebar?: boolean;
  name: string;
};

const routes: CustomRouteObject[] = [
  {
    path: '/',
    name: 'home',
    element: <Home />,
  },
  {
    path: '/InstantaneousView',
    name: 'instantaneousView',
    element: <InstantaneousView />,
  },
  {
    path: '/UserDefinedDownload',
    name: 'userDefinedDownload',
    element: <UserDefinedDownload />,
  },
  {
    path: '/DataItemExplorer',
    name: 'dataItemExplorer',
    element: <DataItemExplorer />,
  },
  {
    path: '/ReportExplorer',
    name: 'reportExplorer',
    element: <ReportExplorer />,
  },
  {
    path: '/Links',
    name: 'links',
    element: <Links />,
  },
  {
    path: '/EntryZoneGraphs',
    name: 'entryZoneGraphs',
    element: <EntryZoneGraphs />,
  },
  {
    path: '*',
    name: 'notFound',
    element: <PageNotFound />,
    hideFooter: true,
    hideHeader: true,
    hideSidebar: true,
  },
];

export default routes;
