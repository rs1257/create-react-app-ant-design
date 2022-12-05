import { Button } from 'antd';
import { CustomButtonProps } from '../../types/props';
import './CustomButton.scss';

const CustomButton = ({
  type = 'default',
  size = 'large',
  disabled = false,
  onClick,
  children,
}: CustomButtonProps): JSX.Element => {
  return (
    <Button className="custom-button" type={type} size={size} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

export default CustomButton;
