import { useEffect, useState } from 'react';
import { useInstantaneousFlowsRequest } from '../../api/soap/useInstantaneousFlowsRequest';
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
      // eslint-disable-next-line no-console
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
    // eslint-disable-next-line no-console
    formattedData;
  }, [responseData]);

  return (
    <div className={styles.container}>
      <span> Instantaneous View</span>
      <div>{pageContent}</div>
    </div>
  );
};

export default InstantaneousView;
