import { ReactNode } from 'react';
import { RouteObject } from 'react-router-dom';
import { DataItemExplorerItem } from './api';

export interface DataItemExplorerFolderList {
  level: number;
  items: DataItemExplorerItem[];
}

export interface FolderTreeError {
  level?: number;
  error?: string;
}

export interface FolderTreeLoading {
  level?: number;
  loading?: boolean;
}

export interface FormValues {
  request: Record<string, string>;
}

export type Applicable = 'applicableAt' | 'applicableFor';

export interface DataItemExplorerFormData {
  latestValues: boolean;
  applicable: Applicable;
}

//* Config
export interface MenuItem {
  label: string;
  key: string;
  icon?: ReactNode;
}

export interface NavRoute extends MenuItem {
  children?: MenuItem[];
}

export type CustomRouteObject = RouteObject & {
  hideHeader?: boolean;
  hideFooter?: boolean;
  hideSidebar?: boolean;
  name: string;
};
