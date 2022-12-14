import SystemEntryPointsTable from '../StatusView/Tables/SystemEntryPointsTable';
import './DataItemExplorer.scss';

const DataItemExplorer = (): JSX.Element => {
  return (
    <div className="data-item-explorer">
      <span>Data Item Explorer</span>
      <SystemEntryPointsTable />
    </div>
  );
};

export default DataItemExplorer;
