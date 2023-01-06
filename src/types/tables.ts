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

export interface FormattedData {
  data: DataTableDataType[];
  headers: DataTableHeader[];
  meta: DataTableMetaData;
}

export type DataIndex = keyof DataTableDataType;
