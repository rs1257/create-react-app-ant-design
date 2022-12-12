import { FC } from 'react';
import DataTable from '../../../components/DataTable';
import { formattedData } from '../../../components/DataTable/latestSupplyEntryPointDataFormatter';

const SystemEntryPointsTable: FC = () => {
  const { headers, data } = formattedData;
  return (
    <div>
      <span>SystemEntryPointsTable</span>
      <DataTable headers={headers} data={data} />
    </div>
  );
};

export default SystemEntryPointsTable;
