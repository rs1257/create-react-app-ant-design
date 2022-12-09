// import { useEffect } from 'react';
// import { useRequest } from '../../api/useRequest';
import DataTable from '../../components/DataTable';
import './DataItemExplorer.scss';

const DataItemExplorer = (): JSX.Element => {
  // const { doRequest: fetchTableData } = useRequest({
  //   url: `https://mip-prd-web.azurewebsites.net/api/AnnualLngStockLevel?currentUtcDateTimeOverride`,
  //   method: 'GET',
  //   onSuccess: (data) => {
  //     // eslint-disable-next-line no-console
  //     console.log(data);
  //   },
  // });

  // useEffect(() => {
  //   const fetchData = async (): Promise<void> => {
  //     await fetchTableData();
  //   };
  //   fetchData()
  //     .then(() => {
  //       // eslint-disable-next-line no-console
  //       console.log('success');
  //     })
  //     .catch((error) => {
  //       // eslint-disable-next-line no-console
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div className="data-item-explorer">
      <span>Data Item Explorer</span>
      <DataTable />
    </div>
  );
};

export default DataItemExplorer;
