import { IconButtonProps } from '../../types/props';
import './IconButton.scss';

const IconButton = ({ name }: IconButtonProps): JSX.Element => {
  return (
    <a className="download-link" title={`Download ${name}`}>
      <img src={`/icon-${name}.png`} className="download-icon" />
    </a>
  );
};

export default IconButton;
