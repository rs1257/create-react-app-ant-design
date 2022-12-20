import forecastMargins from '../../../data/forecastMargins.json';
import { DataTableDataType, DataTableHeader, FormattedData } from '../../../types/tables';
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

const rowOne = mnData.reduce((result: DataTableDataType, item, index): DataTableDataType => {
  result[String(index + 1) as keyof DataTableDataType] = item;
  result.name = `mn${index}`;
  return result;
}, {});

const rowTwo = demandData.reduce((result: DataTableDataType, item, index): DataTableDataType => {
  result[String(index + 1) as keyof DataTableDataType] = item;
  result.name = `demand${index}`;
  return result;
}, {});

export const formattedData: FormattedData = {
  headers,
  data: [rowOne, rowTwo],
  meta: {
    date: getDate(gasDay.day),
    time: getTime(gasDay.day),
  },
};
