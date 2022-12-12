import './StatusView.scss';
import SystemEntryPointsTable from './Tables/SystemEntryPointsTable';

const StatusView = (): JSX.Element => {
  return (
    <div className="status-view">
      <span>Status View</span>
      <SystemEntryPointsTable />
    </div>
  );
};

export default StatusView;
