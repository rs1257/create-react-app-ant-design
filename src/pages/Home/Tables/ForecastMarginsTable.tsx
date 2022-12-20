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
    'https://mip-prd-web.azurewebsites.net/api/StatusHeader?currentUtcDateTimeOverride',
    ['forecastMarginsTable']
  );

  if (isLoading) return <Loader />;

  if (error) return <>{'An error has occurred: ' + error.message}</>;

  if (!rawData) {
    return <></>;
  }
  const { headers, data } = getFormattedForecastMarginsData(rawData);

  return (
    <div>
      <span>ForecastMargins</span>
      <div className="system-entry-points__table">
        <DataTable headers={headers} data={data} />
      </div>
    </div>
  );
};

export default ForecastMarginsTable;
