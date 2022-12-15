import forecastMargins from '../../../data/forecastMargins.json';
import { DataTableDataTypeMultiColumn, DataTableHeader, FormattedData } from '../../../types/data';
import { getDate, getTime } from '../../../utils/dateTime';

const {
  mntriggerdemandforecastweekly: { header, mnData, demandData },
  gasDay,
} = forecastMargins;

const headers: DataTableHeader[] = header.map((cell, index) => {
  return {
    title: cell,
    dataIndex: String(index + 1),
  };
});

const rowOne = mnData.reduce(
  (result: DataTableDataTypeMultiColumn, item, index): DataTableDataTypeMultiColumn => {
    result[String(index + 1) as keyof DataTableDataTypeMultiColumn] = item;
    return result;
  },
  {}
);

const rowTwo = demandData.reduce(
  (result: DataTableDataTypeMultiColumn, item, index): DataTableDataTypeMultiColumn => {
    result[String(index + 1) as keyof DataTableDataTypeMultiColumn] = item;
    return result;
  },
  {}
);

export const formattedData: FormattedData = {
  headers,
  data: [rowOne, rowTwo],
  meta: {
    date: getDate(gasDay.day),
    time: getTime(gasDay.day),
  },
};
