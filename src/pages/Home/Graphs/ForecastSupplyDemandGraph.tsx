import LineGraph from '../../../components/LineGraph';
import { forecastSupplyDemandDataFormatter } from '../Formatters/forecastSupplyDemandDataFormatter';
import useGetRequest from '../../../api/useGetRequest';
import { GraphResponseData } from '../../../types/api';
import GraphCard from '../../../components/GraphCard';

const ForecastSupplyDemandGraph = (): JSX.Element => {
  const {
    isLoading,
    error,
    data: forecastSupplyDemandData,
  } = useGetRequest<GraphResponseData>(
    'https://mip-prd-web.azurewebsites.net/api/WithinDayForecastSupplyAndDemand',
    ['demandSupplyGraph']
  );

  const { supply, demand } = forecastSupplyDemandDataFormatter(forecastSupplyDemandData?.data);

  return (
    <GraphCard title="Forecast Supply and Demand" isLoading={isLoading} error={error}>
      <LineGraph
        data={[demand, supply]}
        yAxisDataKey="value"
        xAxisDataKey="applicableAtUkLocalTime"
        labels={['Demand', 'Supply']}
      />
    </GraphCard>
  );
};

export default ForecastSupplyDemandGraph;
