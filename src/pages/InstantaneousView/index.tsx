import { useEffect, useState } from 'react';
import { useInstantaneousFlowsRequest } from '../../api/soap/useInstantaneousFlowsRequest';
import DataTable from '../../components/DataTable';
import Loader from '../../components/Loader';
import { InstantaneousFlowResponseData, InstantaneousFlowSoapResponse } from '../../types/api';
import { convertXmlToJson } from '../../utils/xmlToJson';
import { getInstantaneousFlowData } from './Formatters/InstantaneousFlowDataFormatter';
import styles from './InstantaneousView.module.scss';

const InstantaneousView = (): JSX.Element => {
  const [responseData, setResponseData] = useState<InstantaneousFlowResponseData>();
  const [pageContent, setPageContent] = useState<JSX.Element | JSX.Element[]>();
  const { isLoading, error, data } = useInstantaneousFlowsRequest<string>();

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
            GetInstantaneousFlowDataResponse: {
              GetInstantaneousFlowDataResult: { EDPReportPage },
            },
          },
        },
      } = convertXmlToJson<InstantaneousFlowSoapResponse>(data);
      setResponseData(EDPReportPage);
    }
  }, [data, error, isLoading]);

  useEffect(() => {
    if (!responseData) {
      return;
    }
    const formattedData = getInstantaneousFlowData(responseData);
    setPageContent(
      <>
        <span>Instantaneous View</span>
        {formattedData.data.map(({ tableName, tableData }, index) => (
          <div style={{ margin: '50px', width: '75vw' }} key={index}>
            <div>{tableName}</div>
            <DataTable data={tableData.data} headers={tableData.headers} />
          </div>
        ))}
      </>
    );
  }, [responseData]);

  return (
    <div className={styles.container}>
      <div>{pageContent}</div>
    </div>
  );
};

export default InstantaneousView;
