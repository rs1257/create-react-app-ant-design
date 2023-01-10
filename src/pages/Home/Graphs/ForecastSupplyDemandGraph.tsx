import LineGraph from '../../../components/LineGraph';
import useGetRequest from '../../../api/useGetRequest';
import { SupplyDemandResponseData } from '../../../types/api';
import GraphCard from '../../../components/GraphCard';

const ForecastSupplyDemandGraph = (): JSX.Element => {
  const {
    isLoading,
    error,
    data: forecastSupplyDemandData,
  } = useGetRequest<SupplyDemandResponseData>('api/forecast-supply-demand', ['demandSupplyGraph']);

  const {
    data: { supply, demand },
  } = forecastSupplyDemandData || { data: { supply: [], demand: [] } };

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
