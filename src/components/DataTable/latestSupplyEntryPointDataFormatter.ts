import { DataTableDataType, FormattedData } from '../../types/props';
import latestSupplyEntryPoint from '../../data/latestSupplyEntryPoint.json';

const { data } = latestSupplyEntryPoint;

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
};
