import { FC } from 'react';
import DataTable from '../../../components/DataTable';
import { formattedData } from '../../../components/DataTable/latestSupplyEntryPointDataFormatter';

const SystemEntryPointsTable: FC = () => {
  const {
    headers,
    data,
    meta: { time },
  } = formattedData;

  return (
    <div>
      <div>
        <span>Last Updated{time}</span>
      </div>
      <div>
        <DataTable headers={headers} data={data} />
      </div>
    </div>
  );
};

export default SystemEntryPointsTable;
