import Loader from '../Loader';
import { Alert, Card } from 'antd';
import { GraphCardProps } from '../../types/props';

const GraphCard = ({ title, isLoading, error, children }: GraphCardProps): JSX.Element => {
  return (
    <Card title={title} style={{ textAlign: 'center' }}>
      <>
        {isLoading && <Loader />}
        {error && <Alert message={`An error has occurred: ${error.message}`} type="error" />}
        {!isLoading && !error && children}
      </>
    </Card>
  );
};

export default GraphCard;
