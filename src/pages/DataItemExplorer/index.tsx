import DataItemExplorerFolderStructure from '../../components/DataItemExplorerFolderStructure';
import styles from './DataItemExplorer.module.scss';

const DataItemExplorer = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <span>Data Item Explorer</span>
      <DataItemExplorerFolderStructure />
    </div>
  );
};

export default DataItemExplorer;
