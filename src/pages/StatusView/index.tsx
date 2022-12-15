import './StatusView.scss';
import ForecastMarginsTable from './Tables/ForecastMarginsTable';
import SystemEntryPointsTable from './Tables/SystemEntryPointsTable';

const StatusView = (): JSX.Element => {
  return (
    <div className="status-view">
      <span>Status View</span>
      <SystemEntryPointsTable />
      <ForecastMarginsTable />
    </div>
  );
};

export default StatusView;
