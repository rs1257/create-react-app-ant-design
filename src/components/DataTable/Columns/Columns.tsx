import { FilterOutlined } from '@ant-design/icons';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import Highlighter from 'react-highlight-words';
import { DataTableColumnsProps } from '../../../types/props';
import { DataIndex, DataType } from '../dummyData';
import FilterDropdown from './FilterDropdown';

const Columns = ({
  searchInput,
  searchText,
  setSearchText,
  searchedColumn,
  setSearchedColumn,
}: DataTableColumnsProps): ColumnsType<DataType> => {
  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
    filterDropdown: (filterDropdownProps) => (
      <FilterDropdown
        filterDropdownProps={filterDropdownProps}
        searchInput={searchInput}
        dataIndex={dataIndex}
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
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
      ...getColumnSearchProps('age'),
      sorter: (a, b) => a.age - b.age,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      ...getColumnSearchProps('address'),
      sorter: (a, b) => a.address.localeCompare(b.address),
      sortDirections: ['descend', 'ascend'],
    },
  ];

  return columns;
};

export default Columns;
