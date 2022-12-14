import EmailSubmissionForm, { submitRequest } from '../../components/EmailSubmissionForm';
import './Links.scss';

const Links = (): JSX.Element => {
  return (
    <div className="links">
      <span>Links</span>
      <EmailSubmissionForm submitRequest={submitRequest} />
    </div>
  );
};

export default Links;
