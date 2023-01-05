import { FC } from 'react';
import { List } from 'antd';
import { RightOutlined, DownOutlined, FolderOutlined } from '@ant-design/icons';
import CustomButton from '../CustomButton';
import { FolderItemProps } from '../../types/props';
import styles from './DataItemExplorerFolderStructure.module.scss';

const FolderItem: FC<FolderItemProps> = ({
  id,
  name,
  selected,
  level,
  handleSelect,
  setItemSelected,
}) => {
  const className = selected ? `${styles.listItem} ${styles.selected}` : styles.listItem;
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
