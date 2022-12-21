import { List } from 'antd';
import { FC, ReactNode } from 'react';
import { DataItemExplorerItem, DataItemExplorerNodeType } from '../../types/api';
import { DataItemExplorerFolderList } from '../../types/data';
import FolderItem from './FolderItem';

interface FolderListProps {
  handleSelect: (id: string, level: number) => void;
  list: DataItemExplorerFolderList;
}

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
  };
  return (
    <div style={{ width: '400px', minWidth: '400px', height: '70vh', overflow: 'auto' }}>
      <List size="large" bordered dataSource={items} renderItem={renderList} />
    </div>
  );
};

export default FolderList;
