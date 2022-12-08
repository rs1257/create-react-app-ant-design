import { FC, useRef, useState } from 'react';
import { InputRef } from 'antd';
import { Table } from 'antd';
import { dummyData } from './dummyData';
import Columns from './Columns/Columns';

const DataTable: FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [searchedColumn, setSearchedColumn] = useState<string>('');

  const searchInput = useRef<InputRef>(null);

  const columns = Columns({
    searchInput,
    searchText,
    setSearchText,
    searchedColumn,
    setSearchedColumn,
  });

  return <Table columns={columns} dataSource={dummyData} />;
};

export default DataTable;
