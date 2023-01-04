import EmailSubmissionForm, { submitRequest } from '../../components/EmailSubmissionForm';
import styles from './Links.module.scss';

const Links = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <span>Links</span>
      <EmailSubmissionForm submitRequest={submitRequest} />
    </div>
  );
};

export default Links;
