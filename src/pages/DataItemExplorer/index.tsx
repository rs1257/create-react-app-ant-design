import DataTable from '../../components/DataTable';
import './DataItemExplorer.scss';

const DataItemExplorer = (): JSX.Element => {
  return (
    <div className="data-item-explorer">
      <span>Data Item Explorer</span>
      <DataTable />
    </div>
  );
};

export default DataItemExplorer;
