import dayjs from 'dayjs';
import { DataTableDataType, FormattedData } from '../../types/data';
import latestSupplyEntryPoint from '../../data/latestSupplyEntryPoint.json';

const { data } = latestSupplyEntryPoint;

const getTime = (): string => dayjs(new Date(data[0].applicableAtUkLocalTime)).format('HH:mm');

const getDate = (): string => dayjs(new Date(data[0].applicableAtUkLocalTime)).format('YYYY-MM-DD');

const formattedRawData: DataTableDataType[] = data.map((row) => {
  return {
    name: row.name,
    value: row.value,
  };
});

export const formattedData: FormattedData = {
  headers: [
    { title: 'System Entry Name', dataIndex: 'name' },
    { title: 'Flow Rate (mcm/d)', dataIndex: 'value' },
  ],
  data: formattedRawData,
  meta: {
    date: getDate(),
    time: getTime(),
  },
};
