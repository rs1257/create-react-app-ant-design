import { useEffect, useState } from 'react';
import {
  SoapRequestDateType,
  useDataItemExplorerRequest,
} from '../../../api/soap/useDataItemExplorerRequest';
import DataTable from '../../../components/DataTable';
import { getDataItemExplorerData } from '../../DataItemExplorer/Formatters/dataItemExplorerDataFormatter';
import Loader from '../../../components/Loader';
import { DataItemExplorerDataItem } from '../../../types/tables';
import { convertXmlToJson } from '../../../utils/xmlToJson';

interface SoapResponse {
  'soap:Envelope': {
    'soap:Body': {
      GetPublicationDataWMResponse: {
        GetPublicationDataWMResult: {
          CLSMIPIPublicationObjectBE: DataItemExplorerDataItem[];
        };
      };
    };
  };
}

const DataItemExplorerTable = (): JSX.Element => {
  const [responseData, setResponseData] = useState<DataItemExplorerDataItem[] | undefined>();
  const [pageContent, setPageContent] = useState<JSX.Element | JSX.Element[]>();

  const { isLoading, error, data } = useDataItemExplorerRequest<string>({
    latestFlag: true,
    applicableFor: true,
    dateTo: '2022-12-15T00:00:00',
    dateFrom: '2022-12-01T00:00:00',
    dateType: SoapRequestDateType.gas,
    names: ['Calorific Value, ApachePSBlackstart, Industrial Offtake'],
  });
  useEffect(() => {
    if (isLoading) {
      setPageContent(<Loader />);
    }
    if (error) {
      setPageContent(<>{'An error has occurred: ' + error.message}</>);
    }
    if (data) {
      const {
        'soap:Envelope': {
          'soap:Body': {
            GetPublicationDataWMResponse: {
              GetPublicationDataWMResult: { CLSMIPIPublicationObjectBE },
            },
          },
        },
      } = convertXmlToJson<SoapResponse>(data);
      setResponseData(CLSMIPIPublicationObjectBE);
    }
  }, [data, error, isLoading]);

  useEffect(() => {
    if (!responseData) {
      return;
    }
    const formattedData = getDataItemExplorerData(responseData);
    setPageContent(
      formattedData.map((table, index) => (
        <DataTable data={table.data} headers={table.headers} key={index} />
      ))
    );
  }, [responseData]);

  return <div>{pageContent}</div>;
};

export default DataItemExplorerTable;
