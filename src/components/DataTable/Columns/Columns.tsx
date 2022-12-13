import { FilterOutlined } from '@ant-design/icons';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import { ReactNode } from 'react';
import Highlighter from 'react-highlight-words';
import { DataTableColumnsProps } from '../../../types/props';
import { DataIndex, DataTableDataType } from '../../../types/data';
import FilterDropdown from './FilterDropdown';

const Columns = ({
  searchInput,
  searchText,
  setSearchText,
  searchedColumn,
  setSearchedColumn,
  headers,
}: DataTableColumnsProps): ColumnsType<DataTableDataType> => {
  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataTableDataType> => ({
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
    onFilter: (value, record): boolean => {
      return record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase());
    },
    onFilterDropdownOpenChange: (visible): void => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text: string | number): ReactNode => {
      const value = typeof text === 'number' ? text.toFixed(2).toString() : text.toString();
      return searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={value ? value : ''}
        />
      ) : (
        value
      );
    },
  });

  const sortColumn = (
    a: DataTableDataType,
    b: DataTableDataType,
    column: keyof DataTableDataType
  ): number => {
    if (typeof a[column] === 'number' && typeof b[column] === 'number') {
      return +a[column] - +b[column];
    }
    return String(a[column]).localeCompare(String(b[column]));
  };

  const getColumnWidth = (dataIndex: string): string => {
    if (dataIndex === 'value') {
      return '150px';
    }
    return '250px';
  };

  const columns: ColumnsType<DataTableDataType> = headers.map(({ title, dataIndex }) => {
    return {
      title,
      dataIndex,
      key: dataIndex,
      ...getColumnSearchProps(dataIndex as keyof DataTableDataType),
      sorter: (a, b) => sortColumn(a, b, dataIndex as keyof DataTableDataType),
      sortDirections: ['descend', 'ascend'],
      width: getColumnWidth(dataIndex),
    };
  });

  return columns;
};

export default Columns;
