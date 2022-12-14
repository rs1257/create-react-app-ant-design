import {
  InstantaneousFlowResponseData,
  InstantaneousFlowDataSet,
  InstantaneousFlowTableDescription,
  InstantaneousFlowDataItem,
} from '../../../types/api';
import {
  DataTableDataType,
  DataTableHeader,
  FormattedTableData,
  InstantaneousFlowPageData,
  InstantaneousFlowTableHeaderName,
} from '../../../types/tables';
import dayjs from 'dayjs';
import { BarChartProps, InstantaneousFlowChartTitle } from '../../../types/graphs';

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
  const columns = EDPEnergyDataBE.map(({ ApplicableAt }) => dayjs(ApplicableAt).format('HH:mm'));
  columns.unshift(headerName);
  return columns.map((header, index) => ({ title: header, dataIndex: `${index}` }));
};

export const getData = (dataSet: InstantaneousFlowDataSet[]): DataTableDataType[] => {
  return dataSet.map(({ EDPObjectName, EnergyDataList }) => {
    const columnOne = { 0: EDPObjectName, name: `${EDPObjectName}IF0` };
    const row = EnergyDataList.EDPEnergyDataBE.reduce(
      (result: DataTableDataType, item, index): DataTableDataType => {
        result[String(index + 1) as keyof DataTableDataType] = item.FlowRate;
        result.name = `${EDPObjectName}IF${index + 1}`;
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
): FormattedTableData => {
  const headerName = getTableHeaderName(tableName);
  const data = Array.isArray(dataSet) ? dataSet : [dataSet];
  const firstRow = data[0].EnergyDataList.EDPEnergyDataBE;
  return {
    data: getData(data),
    headers: getColumns(headerName, firstRow),
    meta: {},
  };
};

export const getChartName = (
  tableName: InstantaneousFlowTableDescription
): InstantaneousFlowChartTitle => {
  switch (tableName) {
    case InstantaneousFlowTableDescription.zoneSupply:
    case InstantaneousFlowTableDescription.terminalSupply:
      return InstantaneousFlowChartTitle.latestFlows;
    case InstantaneousFlowTableDescription.categoryDemandFlow:
    case InstantaneousFlowTableDescription.interconnectorFlow:
      return InstantaneousFlowChartTitle.latestCategoryDemandFlows;
    default:
      return InstantaneousFlowChartTitle.latestFlows;
  }
};

export const getBarChartData = (
  dataSet: InstantaneousFlowDataSet | InstantaneousFlowDataSet[],
  tableName: InstantaneousFlowTableDescription
): BarChartProps => {
  if (Array.isArray(dataSet)) {
    return {
      xAxisLabel: 'Location',
      yAxisLabel: 'mcm/day',
      chartData: dataSet.map(({ EDPObjectName, EnergyDataList }) => ({
        name: EDPObjectName,
        value: EnergyDataList.EDPEnergyDataBE[EnergyDataList.EDPEnergyDataBE.length - 1].FlowRate,
      })),
      chartName: getChartName(tableName),
    };
  }
  return {
    chartData: [],
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
        barChartData: getBarChartData(EDPObjectCollection.EDPObjectBE, Description),
      };
    }
  );
  return {
    gasDay: CurrentGasDay,
    data,
  };
};
