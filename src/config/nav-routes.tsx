import { createElement } from 'react';
import { DatabaseOutlined, LineChartOutlined, LinkOutlined, HomeOutlined } from '@ant-design/icons';
import { NavRoute } from '../types/props';

const navRoutes: NavRoute[] = [
  {
    label: 'Gas Prevailing View',
    key: '/',
    icon: createElement(HomeOutlined),
    children: [
      { label: 'Gas Prevailing View child 1', key: '/inner-1' },
      { label: 'Gas Prevailing View child 2', key: '/inner-2' },
    ],
  },
  {
    label: 'Report Explorer',
    key: '/reportExplorer',
    icon: createElement(LineChartOutlined),
  },
  {
    label: 'Data Item Explorer',
    key: '/dataItemExplorer',
    icon: createElement(DatabaseOutlined),
  },
  {
    label: 'Links',
    key: '/links',
    icon: createElement(LinkOutlined),
  },
];

export default navRoutes;
