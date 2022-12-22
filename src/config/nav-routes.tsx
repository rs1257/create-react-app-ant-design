interface MenuItem {
  label: string;
  key: string;
}

interface NavRoute extends MenuItem {
  children?: MenuItem[];
}

const navRoutes: NavRoute[] = [
  {
    label: 'Gas Prevailing View',
    key: '/',
    children: [
      { label: 'Gas Prevailing View child 1', key: '/inner-1' },
      { label: 'Gas Prevailing View child 2', key: '/inner-2' },
    ],
  },
  {
    label: 'Report Explorer',
    key: '/reportExplorer',
  },
  {
    label: 'Data Item Explorer',
    key: '/dataItemExplorer',
  },
  {
    label: 'Links',
    key: '/links',
  },
];

export default navRoutes;
