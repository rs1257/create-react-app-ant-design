import {
  InstantaneousFlowResponseData,
  InstantaneousFlowDataSet,
  InstantaneousFlowTableDescription,
  InstantaneousFlowDataItem,
} from '../../../types/api';
import {
  DataTableDataType,
  DataTableHeader,
  FormattedData,
  InstantaneousFlowPageData,
  InstantaneousFlowTableHeaderName,
} from '../../../types/tables';

export const getTableHeaderName = (
  tableName: InstantaneousFlowTableDescription
): InstantaneousFlowTableHeaderName => {
  switch (tableName) {
    case InstantaneousFlowTableDescription.zoneSupply:
      return InstantaneousFlowTableHeaderName.systemEntry;
    case InstantaneousFlowTableDescription.terminalSupply:
    case InstantaneousFlowTableDescription.categoryDemandFlow:
      return InstantaneousFlowTableHeaderName.terminalTotals;
    case InstantaneousFlowTableDescription.totalSupply:
      return InstantaneousFlowTableHeaderName.totalSupply;
    case InstantaneousFlowTableDescription.interconnectorFlow:
      return InstantaneousFlowTableHeaderName.interconnectorFlow;
    case InstantaneousFlowTableDescription.totalDemand:
      return InstantaneousFlowTableHeaderName.totalDemand;
    case InstantaneousFlowTableDescription.actualLinepack:
      return InstantaneousFlowTableHeaderName.actualLinepack;
  }
};

export const getColumns = (
  headerName: InstantaneousFlowTableHeaderName,
  EDPEnergyDataBE: InstantaneousFlowDataItem[]
): DataTableHeader[] => {
  const columns = EDPEnergyDataBE.map(({ ApplicableAt }) => ApplicableAt);
  columns.unshift(headerName);
  return columns.map((header, index) => ({ title: header, dataIndex: `${index}` }));
};

export const getData = (dataSet: InstantaneousFlowDataSet[]): DataTableDataType[] => {
  return dataSet.map(({ EDPObjectName, EnergyDataList }) => {
    const columnOne = { 0: EDPObjectName };
    const row = EnergyDataList.EDPEnergyDataBE.reduce(
      (result: DataTableDataType, item, index): DataTableDataType => {
        result[String(index + 1) as keyof DataTableDataType] = item.FlowRate;
        // result.name = `${index}`;
        return result;
      },
      {}
    );
    return { ...columnOne, ...row };
  });
};

export const getTableData = (
  dataSet: InstantaneousFlowDataSet | InstantaneousFlowDataSet[],
  tableName: InstantaneousFlowTableDescription
): FormattedData => {
  const headerName = getTableHeaderName(tableName);
  const data = Array.isArray(dataSet) ? dataSet : [dataSet];
  const firstRow = data[0].EnergyDataList.EDPEnergyDataBE;
  return {
    data: getData(data),
    headers: getColumns(headerName, firstRow),
    meta: {},
  };
};

export const getInstantaneousFlowData = ({
  CurrentGasDay,
  EDPEnergyGraphTableCollection,
}: InstantaneousFlowResponseData): InstantaneousFlowPageData => {
  const data = EDPEnergyGraphTableCollection.EDPEnergyGraphTableBE.map(
    ({ EDPObjectCollection, Description }) => {
      return {
        tableName: Description,
        tableData: getTableData(EDPObjectCollection.EDPObjectBE, Description),
        hasBarChart: true,
      };
    }
  );
  return {
    gasDay: CurrentGasDay,
    data,
  };
};
