import { FC } from 'react';
import { List } from 'antd';
import { RightOutlined, DownOutlined } from '@ant-design/icons';
import CustomButton from '../CustomButton';

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
  return (
    <List.Item>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <span>{name}</span>
        <CustomButton
          type="text"
          onClick={(): void => {
            handleSelect(id, level);
            setItemSelected(id);
          }}
        >
          {selected ? <DownOutlined /> : <RightOutlined />}
        </CustomButton>
      </div>
    </List.Item>
  );
};

export default FolderItem;
