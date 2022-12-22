import DataItemExplorerFolderStructure from '../../components/DataItemExplorerFolderStructure';
import './DataItemExplorer.scss';

const DataItemExplorer = (): JSX.Element => {
  return (
    <div className="data-item-explorer">
      <span>Data Item Explorer</span>
      <DataItemExplorerFolderStructure />
    </div>
  );
};

export default DataItemExplorer;
