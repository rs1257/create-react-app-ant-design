import { FC } from 'react';
import DataTable from '../../../components/DataTable';
import { formattedData } from '../../../components/DataTable/latestSupplyEntryPointDataFormatter';
import './SystemEntryPointsTable.scss';

const SystemEntryPointsTable: FC = () => {
  const {
    headers,
    data,
    meta: { time },
  } = formattedData;

  return (
    <div className="system-entry-points">
      <div className="system-entry-points__header">
        <h2>Last Updated: {time}</h2>
      </div>
      <div className="system-entry-points__table">
        <DataTable headers={headers} data={data} />
      </div>
    </div>
  );
};

export default SystemEntryPointsTable;
