import { FC } from 'react';
import useGetRequest from '../../../api/useGetRequest';
import DataTable from '../../../components/DataTable';
import Loader from '../../../components/Loader';
import { LatestSupplyEntryPointResponseData } from '../../../types/api';
import { getFormattedSystemEntryPointsData } from '../Formatters/latestSupplyEntryPointDataFormatter';
import styles from './SystemEntryPointsTable.module.scss';

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
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Last Updated: {time}</h2>
      </div>
      <div className={styles.table}>
        <DataTable headers={headers} data={data} />
      </div>
    </div>
  );
};

export default SystemEntryPointsTable;
