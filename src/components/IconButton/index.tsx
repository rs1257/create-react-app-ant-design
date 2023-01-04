import { Button } from 'antd';
import { IconButtonProps } from '../../types/props';
import './IconButton.scss';

const IconButton = ({ name }: IconButtonProps): JSX.Element => {
  return (
    <Button
      className="download-button"
      icon={
        <img
          src={`/icon-${name}.png`}
          className="download-button__icon"
          onClick={(): void => {
            return;
          }}
        />
      }
    ></Button>
  );
};

export default IconButton;
