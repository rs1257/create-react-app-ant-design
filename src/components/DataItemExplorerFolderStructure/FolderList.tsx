import { List } from 'antd';
import { FC, ReactNode } from 'react';
import { DataItemExplorerItem, DataItemExplorerNodeType } from '../../types/api';
import FolderItem from './FolderItem';
import { FolderListProps } from '../../types/props';
import styles from './DataItemExplorerFolderStructure.module.scss';

const FolderList: FC<FolderListProps> = ({ handleSelect, list }) => {
  const { items, level } = list;
  const setItemSelected = (id: string): void => {
    items.forEach((item) => {
      if (item.dataItemCategoryTreeNodeId === id) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    });
  };
  const renderList = (item: DataItemExplorerItem): ReactNode => {
    const { dataItemCategoryTreeNodeId: id, name, nodeType, selected } = item;
    if (nodeType === DataItemExplorerNodeType.folder) {
      return (
        <FolderItem
          id={id}
          name={name}
          selected={selected}
          level={level}
          handleSelect={handleSelect}
          setItemSelected={setItemSelected}
        />
      );
    }
    return <></>;
  };
  return (
    <div className={styles.list}>
      <List size="large" bordered dataSource={items} renderItem={renderList} />
    </div>
  );
};

export default FolderList;
