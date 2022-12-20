import { useEffect, useState } from 'react';
import {
  SoapRequestDateType,
  useDataItemExplorerRequest,
} from '../../api/soap/useDataItemExplorerRequest';
import DataTable from '../../components/DataTable';
import { getDataItemExplorerData } from '../../components/DataTable/Formatters/dataItemExplorerDataFormatter';
import EmailSubmissionForm, { submitRequest } from '../../components/EmailSubmissionForm';
import Loader from '../../components/Loader';
import { DataItemExplorerDataItem } from '../../types/data';
import { convertXmlToJson } from '../../utils/xmlToJson';
import './Links.scss';

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

const Links = (): JSX.Element => {
  const [responseData, setResponseData] = useState<DataItemExplorerDataItem[] | undefined>();
  const [pageContent, setPageContent] = useState<JSX.Element | JSX.Element[]>();

  const { isLoading, error, data } = useDataItemExplorerRequest({
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
      setPageContent(<>{'An error has occurred: ' + (error as Error).message}</>);
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

  return (
    <div className="links">
      <span>Links</span>
      <span>{pageContent}</span>
      <EmailSubmissionForm submitRequest={submitRequest} />
    </div>
  );
};

export default Links;
