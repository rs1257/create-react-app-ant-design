import { FC, useRef, useState } from 'react';
import { InputRef } from 'antd';
import { Table } from 'antd';
import Columns from './Columns/Columns';
import { DataTableProps } from '../../types/props';

const DataTable: FC<DataTableProps> = ({ data, headers }) => {
  const [searchText, setSearchText] = useState<string>('');
  const [searchedColumn, setSearchedColumn] = useState<string>('');

  // eslint-disable-next-line no-console
  console.log('here');

  const searchInput = useRef<InputRef>(null);

  const columns = Columns({
    searchInput,
    searchText,
    setSearchText,
    searchedColumn,
    setSearchedColumn,
    headers,
  });

  return (
    <Table columns={columns} dataSource={data} rowKey={(record): string => String(record.name)} />
  );
};

export default DataTable;
