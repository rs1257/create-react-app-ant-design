import EmailSubmissionForm, { submitRequest } from '../../components/EmailSubmissionForm';
import styles from './UserDefinedDownload.module.scss';

const UserDefinedDownload = (): JSX.Element => {
  return (
    <div className={styles.container}>
      User Defined Download
      <EmailSubmissionForm submitRequest={submitRequest} />
    </div>
  );
};

export default UserDefinedDownload;
