import { FilterOutlined } from '@ant-design/icons';
import { InputRef } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import { FilterConfirmProps } from 'antd/es/table/interface';
import { Dispatch, RefObject, SetStateAction } from 'react';
import Highlighter from 'react-highlight-words';
import { DataIndex, DataType } from '../dummyData';
import FilterDropdown from './FilterDropdown';

interface ColumnsProps {
  searchInput: RefObject<InputRef>;
  handleSearch: (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex
  ) => void;
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  handleReset: (clearFilters: () => void) => void;
  searchedColumn: string;
  setSearchedColumn: Dispatch<SetStateAction<string>>;
}

const Columns = ({
  searchInput,
  handleSearch,
  searchText,
  setSearchText,
  handleReset,
  searchedColumn,
  setSearchedColumn,
}: ColumnsProps): ColumnsType<DataType> => {
  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
    filterDropdown: (filterDropdownProps) => (
      <FilterDropdown
        filterDropdownProps={filterDropdownProps}
        searchInput={searchInput}
        dataIndex={dataIndex}
        handleSearch={handleSearch}
        handleReset={handleReset}
        setSearchText={setSearchText}
        setSearchedColumn={setSearchedColumn}
      />
    ),
    filterIcon: (filtered: boolean) => (
      <FilterOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible): void => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text: string) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
      ...getColumnSearchProps('age'),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      ...getColumnSearchProps('address'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];

  return columns;
};

export default Columns;
