import { ButtonType } from 'antd/es/button';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { ErrorInfo, ReactNode } from 'react';
import { Dispatch, RefObject, SetStateAction } from 'react';
import { InputRef } from 'antd';
import { FilterDropdownProps } from 'antd/es/table/interface';
import { DataIndex, DataTableDataType, DataTableHeader } from './tables';
import { DataItemExplorerFolderList, formValues } from './data';
import { RouteObject } from 'react-router-dom';

//* Components

export interface CustomButtonProps {
  size?: SizeType;
  type?: ButtonType;
  icon?: ReactNode | null;
  disabled?: boolean;
  danger?: boolean;
  onClick: () => void;
  children: ReactNode;
}

export interface IconButtonProps {
  name: 'XML' | 'CSV' | 'JSON';
}

export interface FolderItemProps {
  id: string;
  name: string;
  selected?: boolean;
  level: number;
  handleSelect: (id: string, level: number) => void;
  setItemSelected: (id: string) => void;
}

export interface FolderListProps {
  handleSelect: (id: string, level: number) => void;
  list: DataItemExplorerFolderList;
}

export interface DataTableProps {
  data: DataTableDataType[];
  headers: DataTableHeader[];
}

export interface DataTableColumnsProps {
  searchInput: RefObject<InputRef>;
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  searchedColumn: string;
  setSearchedColumn: Dispatch<SetStateAction<string>>;
  headers: DataTableHeader[];
}

export type DataTableFilterProps = {
  filterDropdownProps: FilterDropdownProps;
  searchInput: RefObject<InputRef>;
  dataIndex: DataIndex;
  setSearchText: Dispatch<SetStateAction<string>>;
  setSearchedColumn: Dispatch<SetStateAction<string>>;
};

export type LinkButtonProps = {
  size?: SizeType;
  href: string;
  target?: string;
  danger?: boolean;
  icon?: ReactNode | null;
  children: ReactNode;
};

export interface DatePickerProps {
  date?: string | null;
  setDate: (date: string) => void;
}

export interface DateRangePickerProps {
  dateRange: [string, string];
  setDateRange: (date: [string, string]) => void;
  showTime?: boolean;
}

export interface ErrorBoundaryProps {
  children?: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export interface EmailSubmissionFormProps {
  submitRequest: (values: formValues) => void;
}

export interface GraphCardProps {
  title: string;
  isLoading: boolean;
  error: Error | null;
  children: ReactNode | undefined;
}

export interface LayoutTypeProps {
  header?: ReactNode;
  footer?: ReactNode;
  sidebar?: ReactNode;
  collapsed?: boolean;
  page: ReactNode;
}

export interface LineGraphProps<T> {
  data: T[];
  xAxisDataKey: string;
  yAxisDataKey: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  labels: string[];
  xAxisTickFormatter?: (value: string) => string;
  tooltipLabelFormatter?: (value: string) => string;
  dot?: boolean;
}

export interface SidebarProps {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
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

//* Pages
