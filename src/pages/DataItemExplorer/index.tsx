import DataItemExplorerFolderStructure from '../../components/DataItemExplorerFolderStructure';
import DataItemExplorerForm from './Form/DataItemExplorerForm';
import styles from './DataItemExplorer.module.scss';

const DataItemExplorer = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <span>Data Item Explorer</span>
      <DataItemExplorerFolderStructure />
      <span>Criteria</span>
      <DataItemExplorerForm />
    </div>
  );
};

export default DataItemExplorer;
