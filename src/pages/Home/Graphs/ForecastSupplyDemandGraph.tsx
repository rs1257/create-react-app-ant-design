import forecastSupplyDemandData from '../../../data/forecastSupplyDemand.json';
import dayjs from 'dayjs';
import LineGraph from '../../../components/LineGraph';

interface Datum {
  value: number;
  applicableAt: string;
  applicableAtUkLocalTime: string | number;
  qualityIndicator: null;
  publicationObjectName: string;
  applicableFor: string;
  generatedTimeStamp: string;
  generatedTimeStampUkLocalTime: string;
  rawDisplayValue: string;
}

interface SupplyDemandData {
  supply: Datum[];
  demand: Datum[];
}

const ForecastSupplyDemandGraph = (): JSX.Element => {
  const { data } = forecastSupplyDemandData;

  const initialSupplyDemandData: SupplyDemandData = { supply: [], demand: [] };
  const { demand, supply } = data.reduce((acc, datum) => {
    const { applicableAtUkLocalTime } = datum;
    const epochTime = +dayjs(applicableAtUkLocalTime).startOf('hour');

    const dataItem = { ...datum, applicableAtUkLocalTime: epochTime };
    if (datum.publicationObjectName === 'Supply') {
      acc.supply.push(dataItem);
    }

    if (datum.publicationObjectName === 'Demand') {
      acc.demand.push(dataItem);
    }

    return acc;
  }, initialSupplyDemandData);

  return (
    <>
      <h1>Forecast Supply and Demand</h1>
      <LineGraph lines={[demand, supply]} />
    </>
  );
};

export default ForecastSupplyDemandGraph;
