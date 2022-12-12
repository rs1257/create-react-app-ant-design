export interface DataTableDataType {
  value: number;
  name: string;
}

export interface DataTableHeader {
  title: string;
  dataIndex: string;
}

export interface DataTableMetaData {
  date: string;
  time: string;
}

export interface FormattedData {
  data: DataTableDataType[];
  headers: DataTableHeader[];
  meta: DataTableMetaData;
}

export type DataIndex = keyof DataTableDataType;
