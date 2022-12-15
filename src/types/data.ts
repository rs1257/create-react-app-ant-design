export interface DataTableDataType {
  name: string;
  value: number;
}

export interface DataTableDataTypeMultiColumn {
  valueOne?: number | string;
  valueTwo?: number | string;
  valueThree?: number | string;
  valueFour?: number | string;
  valueFive?: number | string;
  valueSix?: number | string;
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
  data: DataTableDataType[] | DataTableDataTypeMultiColumn[];
  headers: DataTableHeader[];
  meta: DataTableMetaData;
}

export type DataIndex = keyof DataTableDataType;
