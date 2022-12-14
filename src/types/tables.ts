import { InstantaneousFlowTableDescription } from './api';
import { BarChartProps } from './graphs';

export interface DataTableDataType {
  [key: string]: string | number;
}

export interface DataTableHeader {
  title: string;
  dataIndex: string;
}

export interface DataTableMetaData {
  date?: string | string[];
  time?: string | string[];
  name?: string;
}

export interface FormattedTableData {
  data: DataTableDataType[];
  headers: DataTableHeader[];
  meta: DataTableMetaData;
}

export type DataIndex = keyof DataTableDataType;

export enum InstantaneousFlowTableHeaderName {
  systemEntry = 'System Entry Name',
  terminalTotals = 'Terminal Totals',
  totalSupply = 'Total System Supply',
  interconnectorFlow = 'Interconnector Export Totals',
  totalDemand = 'Total Demand Data',
  actualLinepack = 'NTS Actual Linepack',
}

export interface InstantaneousFlowPageData {
  gasDay: string;
  data: {
    tableName: InstantaneousFlowTableDescription;
    tableData: FormattedTableData;
    barChartData: BarChartProps;
  }[];
}
