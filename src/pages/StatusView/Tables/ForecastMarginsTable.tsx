import { FC } from 'react';
import DataTable from '../../../components/DataTable';
import { formattedData } from '../../../components/DataTable/Formatters/forecastMarginsDataFormatter';

const ForecastMarginsTable: FC = () => {
  const { headers, data } = formattedData;

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
