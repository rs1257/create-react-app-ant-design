import {
  DataTableDataType,
  DataTableHeader,
  FormattedData,
  DataItemExplorerDataItem,
  PublicationObjectDataItem,
} from '../../../types/tables';

export const getHeaders = (dataItem: PublicationObjectDataItem): DataTableHeader[] => {
  const headers = [];
  for (const column in dataItem) {
    const header = {
      title: column,
      dataIndex: column,
    };
    headers.push(header);
  }
  return headers;
};

export const getData = (rawData: PublicationObjectDataItem[]): DataTableDataType[] => {
  return rawData.map((row, index) => ({ ...row, name: String(index + 1) }));
};

export const getDataItemExplorerData = (rawData: DataItemExplorerDataItem[]): FormattedData[] => {
  return rawData.map((dataSet) => {
    const {
      PublicationObjectData: { CLSPublicationObjectDataBE },
      PublicationObjectName,
    } = dataSet;
    const dataItem = CLSPublicationObjectDataBE[0];
    return {
      headers: getHeaders(dataItem),
      data: getData(CLSPublicationObjectDataBE),
      meta: {
        name: PublicationObjectName,
      },
    };
  });
};
