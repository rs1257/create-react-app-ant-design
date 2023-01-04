import { FC } from 'react';
import useGetRequest from '../../../api/useGetRequest';
import DataTable from '../../../components/DataTable';
import Loader from '../../../components/Loader';
import { ForecastMarginsNoticeAndDemandResponseData } from '../../../types/api';
import { getFormattedForecastMarginsData } from '../Formatters/forecastMarginsDataFormatter';

const ForecastMarginsTable: FC = () => {
  const {
    isLoading,
    error,
    data: rawData,
  } = useGetRequest<ForecastMarginsNoticeAndDemandResponseData>(
    `${process.env.REACT_APP_API || ''}/api/StatusHeader?currentUtcDateTimeOverride`,
    ['forecastMarginsTable']
  );

  if (isLoading) return <Loader />;

  if (error) return <>{'An error has occurred: ' + error.message}</>;

  const { headers, data } = getFormattedForecastMarginsData(rawData);

  return (
    <div>
      <span>Forecast Margins</span>
      <div className="system-entry-points__table">
        <DataTable headers={headers} data={data} />
      </div>
    </div>
  );
};

export default ForecastMarginsTable;
