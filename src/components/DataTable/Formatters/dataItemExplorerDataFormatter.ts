import { CLSPublicationObjectDataItem, DataItemExplorerDataItem } from '../../../types/tables';
import { DataTableDataType, DataTableHeader, FormattedData } from '../../../types/tables';

const getHeaders = (dataItem: CLSPublicationObjectDataItem): DataTableHeader[] => {
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

const getData = (rawData: CLSPublicationObjectDataItem[]): DataTableDataType[] => {
  return rawData.map((row, index) => {
    return { ...row, name: String(index + 1) } as DataTableDataType;
  });
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
