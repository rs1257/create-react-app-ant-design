import EmailSubmissionForm, {
  submitRequest,
} from '../../components/EmailSubmissionForm/EmailSubmissionForm';
import './UserDefinedDownload.scss';

const UserDefinedDownload = (): JSX.Element => {
  return (
    <div>
      <div className="user-defined-download">User Defined Download</div>
      <EmailSubmissionForm submitRequest={submitRequest} />
    </div>
  );
};

export default UserDefinedDownload;
