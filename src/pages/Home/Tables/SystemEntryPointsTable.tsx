import { FC } from 'react';
import useGetRequest from '../../../api/useGetRequest';
import DataTable from '../../../components/DataTable';
import Loader from '../../../components/Loader';
import { LatestSupplyEntryPointResponseData } from '../../../types/api';
import { getFormattedSystemEntryPointsData } from '../Formatters/latestSupplyEntryPointDataFormatter';
import './SystemEntryPointsTable.scss';

const SystemEntryPointsTable: FC = () => {
  const {
    isLoading,
    error,
    data: rawData,
  } = useGetRequest<LatestSupplyEntryPointResponseData>(
    `${process.env.REACT_APP_API || ''}/api/LatestSupplyEntryPoint?currentUtcDateTimeOverride`,
    ['systemEntryPointsTable']
  );

  if (isLoading) return <Loader />;

  if (error) return <>{'An error has occurred: ' + error.message}</>;

  const {
    headers,
    data,
    meta: { time },
  } = getFormattedSystemEntryPointsData(rawData);

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
