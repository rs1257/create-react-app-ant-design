import forecastSupplyDemandData from '../../../data/forecastSupplyDemand.json';
import LineGraph from '../../../components/LineGraph';
import { forecastSupplyDemandDataFormatter } from '../Formatters/forecastSupplyDemandDataFormatter';

const ForecastSupplyDemandGraph = (): JSX.Element => {
  const { data: supplyDemandData } = forecastSupplyDemandData;
  const { supply, demand } = forecastSupplyDemandDataFormatter(supplyDemandData);

  return (
    <>
      <h1>Forecast Supply and Demand</h1>
      <LineGraph
        data={[demand, supply]}
        yAxisDataKey="value"
        xAxisDataKey="applicableAtUkLocalTime"
        labels={['Demand', 'Supply']}
      />
    </>
  );
};

export default ForecastSupplyDemandGraph;
