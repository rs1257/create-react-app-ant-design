import styles from './Home.module.scss';
import ForecastSupplyDemandGraph from './Graphs/ForecastSupplyDemandGraph';
import WithinDayPclpGraph from './Graphs/WithinDayPclpGraph';
import StorageStockPositionGraph from './Graphs/StorageStockPositionGraph';
import ForecastMarginsTable from './Tables/ForecastMarginsTable';
import SystemEntryPointsTable from './Tables/SystemEntryPointsTable';

const Home = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <span>Home</span>

      <ForecastSupplyDemandGraph />
      <WithinDayPclpGraph />
      <StorageStockPositionGraph />
      <SystemEntryPointsTable />
      <ForecastMarginsTable />
    </div>
  );
};

export default Home;
