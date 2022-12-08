import { Dispatch, FC, RefObject, SetStateAction } from 'react';
import { Button, Input, InputRef, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { FilterConfirmProps, FilterDropdownProps } from 'antd/es/table/interface';
import { DataIndex } from '../dummyData';

type FilterProps = {
  filterDropdownProps: FilterDropdownProps;
  searchInput: RefObject<InputRef>;
  dataIndex: DataIndex;
  setSearchText: Dispatch<SetStateAction<string>>;
  setSearchedColumn: Dispatch<SetStateAction<string>>;
  handleSearch: (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex
  ) => void;
  handleReset: (clearFilters: () => void) => void;
};

const FilterDropdown: FC<FilterProps> = ({
  filterDropdownProps,
  searchInput,
  dataIndex,
  handleSearch,
  handleReset,
  setSearchText,
  setSearchedColumn,
}) => {
  const { setSelectedKeys, selectedKeys, confirm, clearFilters, close } = filterDropdownProps;
  return (
    <div style={{ padding: 8 }} onKeyDown={(e): void => e.stopPropagation()}>
      <Input
        ref={searchInput}
        placeholder={`Search ${dataIndex}`}
        value={selectedKeys[0]}
        onChange={(e): void => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={(): void => handleSearch(selectedKeys as string[], confirm, dataIndex)}
        style={{ marginBottom: 8, display: 'block' }}
      />
      <Space>
        <Button
          type="primary"
          onClick={(): void => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90 }}
        >
          Search
        </Button>
        <Button
          onClick={(): void => clearFilters && handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
        <Button
          type="link"
          size="small"
          onClick={(): void => {
            confirm({ closeDropdown: false });
            setSearchText((selectedKeys as string[])[0]);
            setSearchedColumn(dataIndex);
          }}
        >
          Filter
        </Button>
        <Button
          type="link"
          size="small"
          onClick={(): void => {
            close();
          }}
        >
          close
        </Button>
      </Space>
    </div>
  );
};

export default FilterDropdown;
