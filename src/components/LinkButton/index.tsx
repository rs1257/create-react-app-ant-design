import { Button } from 'antd';
import { LinkButtonProps } from '../../types/props';
import './LinkButton.scss';

const LinkButton = ({ size = 'large', href, target, children }: LinkButtonProps): JSX.Element => {
  return (
    <Button className="link-button" type="link" size={size} href={href} target={target}>
      {children}
    </Button>
  );
};

export default LinkButton;
