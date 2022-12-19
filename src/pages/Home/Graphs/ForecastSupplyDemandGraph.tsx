import LineGraph from '../../../components/LineGraph';
import { forecastSupplyDemandDataFormatter } from '../Formatters/forecastSupplyDemandDataFormatter';
import Loader from '../../../components/Loader';
import useGetGraphData from '../../../api/useGetGraphData';

const ForecastSupplyDemandGraph = (): JSX.Element => {
  const { isLoading, error, data } = useGetGraphData(
    'https://mip-prd-web.azurewebsites.net/api/WithinDayForecastSupplyAndDemand',
    ['demandSupplyGraph']
  );

  if (isLoading) return <Loader />;

  if (error) return <>{'An error has occurred: ' + (error as Error).message}</>;

  const { supply, demand } = forecastSupplyDemandDataFormatter(data?.data);

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
