import { DataTableDataType } from '../../../types/tables';
import latestSupplyEntryPoint from '../../../data/latestSupplyEntryPoint.json';
import { getDate, getTime } from '../../../utils/dateTime';

const { data } = latestSupplyEntryPoint;

export interface RawLatestSupplyEntryPointData {
  value: number;
  applicableAt: string;
  applicableAtUkLocalTime: string;
  name: string;
}

export const getDateTimeFromData = (data: RawLatestSupplyEntryPointData[]): string =>
  data[0].applicableAtUkLocalTime;

const formattedRawData: DataTableDataType[] = data.map((row) => {
  return {
    name: row.name,
    value: row.value,
  };
});

export const formattedData = {
  headers: [
    { title: 'System Entry Name', dataIndex: 'name' },
    { title: 'Flow Rate (mcm/d)', dataIndex: 'value' },
  ],
  data: formattedRawData,
  meta: {
    date: getDate(getDateTimeFromData(data)),
    time: getTime(getDateTimeFromData(data)),
  },
};
