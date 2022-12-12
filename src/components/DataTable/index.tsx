import { FC, useRef, useState } from 'react';
import { InputRef } from 'antd';
import { Table } from 'antd';
import { formattedData } from './dummyData';
import Columns from './Columns/Columns';

const DataTable: FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [searchedColumn, setSearchedColumn] = useState<string>('');

  const searchInput = useRef<InputRef>(null);

  const { headers, data } = formattedData;

  const columns = Columns({
    searchInput,
    searchText,
    setSearchText,
    searchedColumn,
    setSearchedColumn,
    headers,
  });

  return <Table columns={columns} dataSource={data} rowKey={(record): string => record.name} />;
};

export default DataTable;
