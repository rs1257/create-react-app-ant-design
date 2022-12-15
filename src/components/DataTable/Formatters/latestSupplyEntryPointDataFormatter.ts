import { DataTableDataType } from '../../../types/data';
import latestSupplyEntryPoint from '../../../data/latestSupplyEntryPoint.json';
import { getDate, getTime } from '../../../utils/dateTime';

const { data } = latestSupplyEntryPoint;

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
    date: getDate(data[0].applicableAtUkLocalTime),
    time: getTime(data[0].applicableAtUkLocalTime),
  },
};
