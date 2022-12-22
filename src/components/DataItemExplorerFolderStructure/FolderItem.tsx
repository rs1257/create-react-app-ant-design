import { FC } from 'react';
import { List } from 'antd';
import { RightOutlined, DownOutlined, FolderOutlined } from '@ant-design/icons';
import CustomButton from '../CustomButton';
import './DataItemExplorerFolderStructure.scss';

export interface FolderItemProps {
  id: string;
  name: string;
  selected?: boolean;
  level: number;
  handleSelect: (id: string, level: number) => void;
  setItemSelected: (id: string) => void;
}

const FolderItem: FC<FolderItemProps> = ({
  id,
  name,
  selected,
  level,
  handleSelect,
  setItemSelected,
}) => {
  const className = selected
    ? 'folder-structure__list-item--selected'
    : 'folder-structure__list-item';
  return (
    <List.Item className={className}>
      <FolderOutlined />
      <span style={{ width: '75%' }}>{name}</span>
      <CustomButton
        type="text"
        onClick={(): void => {
          handleSelect(id, level);
          setItemSelected(id);
        }}
      >
        {selected ? <DownOutlined /> : <RightOutlined />}
      </CustomButton>
    </List.Item>
  );
};

export default FolderItem;
