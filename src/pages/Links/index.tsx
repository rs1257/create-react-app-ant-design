import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';
import EmailSubmissionForm, { submitRequest } from '../../components/EmailSubmissionForm';
import styles from './Links.module.scss';

const Links = (): JSX.Element => {
  const navigate = useNavigate();

  const handleNavigation = (route: string): void => {
    navigate(route);
  };

  return (
    <div className={styles.container}>
      <span>Links</span>
      <EmailSubmissionForm submitRequest={submitRequest} />
      <CustomButton
        type="primary"
        size="large"
        onClick={(): void => handleNavigation('/InstantaneousView')}
      >
        Instantaneous Flows
      </CustomButton>
      <CustomButton
        type="primary"
        size="large"
        onClick={(): void => handleNavigation('/EntryZoneGraphs')}
      >
        Entry Zone Graphs
      </CustomButton>
      <CustomButton
        type="primary"
        size="large"
        onClick={(): void => handleNavigation('/UserDefinedDownload')}
      >
        User Defined Downloads
      </CustomButton>
    </div>
  );
};

export default Links;
