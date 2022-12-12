import { FC, useEffect } from 'react';
import { Input, Space } from 'antd';
import { CheckOutlined, UndoOutlined } from '@ant-design/icons';
import CustomButton from '../../CustomButton';
import { DataTableFilterProps } from '../../../types/props';

const FilterDropdown: FC<DataTableFilterProps> = ({
  filterDropdownProps,
  searchInput,
  dataIndex,
  setSearchText,
  setSearchedColumn,
}) => {
  const { setSelectedKeys, selectedKeys, confirm, clearFilters, close } = filterDropdownProps;

  const handleReset = (clearFilters: () => void): void => {
    clearFilters();
    setSearchText('');
  };

  useEffect(() => {
    const keys = selectedKeys as string[];
    setSearchText(keys[0]);
    setSearchedColumn(dataIndex);
    confirm({ closeDropdown: false });
  }, [selectedKeys, dataIndex, confirm, setSearchText, setSearchedColumn]);
  return (
    <div style={{ padding: 8 }} onKeyDown={(e): void => e.stopPropagation()}>
      <Input
        ref={searchInput}
        placeholder={`Search ${dataIndex}`}
        value={selectedKeys[0]}
        onPressEnter={(): void => confirm()}
        onChange={(e): void => setSelectedKeys(e.target.value ? [e.target.value.toString()] : [])}
        style={{ marginBottom: 8, display: 'block' }}
      />
      <Space>
        <CustomButton
          onClick={(): void => clearFilters && handleReset(clearFilters)}
          size="middle"
          icon={<UndoOutlined />}
          type={'primary'}
        >
          Reset
        </CustomButton>
        <CustomButton
          size="middle"
          type={'primary'}
          icon={<CheckOutlined />}
          onClick={(): void => {
            close();
          }}
        >
          OK
        </CustomButton>
      </Space>
    </div>
  );
};

export default FilterDropdown;
