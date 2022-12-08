import { ButtonType } from 'antd/es/button';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { ReactNode } from 'react';
import { Dispatch, RefObject, SetStateAction } from 'react';
import { InputRef } from 'antd';
import { FilterDropdownProps } from 'antd/es/table/interface';
import { DataIndex } from '../components/DataTable/dummyData';

//** Components

export interface CustomButtonProps {
  size?: SizeType;
  type?: ButtonType;
  icon?: ReactNode | null;
  disabled?: boolean;
  danger?: boolean;
  onClick: () => void;
  children: ReactNode;
}

export interface DataTableColumnsProps {
  searchInput: RefObject<InputRef>;
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  searchedColumn: string;
  setSearchedColumn: Dispatch<SetStateAction<string>>;
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

export interface DateRangePickerProps {
  dateRange?: [string, string] | null;
  setDateRange: (date: [string, string]) => void;
}

//** Pages
