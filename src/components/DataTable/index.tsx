import { FC, useRef, useState } from 'react';
import type { InputRef } from 'antd';
import { Table } from 'antd';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import { DataIndex, dummyData } from './dummyData';
import Columns from './Columns/Columns';

const DataTable: FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [searchedColumn, setSearchedColumn] = useState<string>('');
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex
  ): void => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void): void => {
    clearFilters();
    setSearchText('');
  };

  const columns = Columns({
    searchInput,
    handleSearch,
    searchText,
    setSearchText,
    handleReset,
    searchedColumn,
    setSearchedColumn,
  });

  return <Table columns={columns} dataSource={dummyData} />;
};

export default DataTable;
