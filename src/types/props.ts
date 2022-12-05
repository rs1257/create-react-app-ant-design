import { ButtonType } from 'antd/es/button';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { ReactNode } from 'react';

export type CustomButtonProps = {
  size?: SizeType;
  type?: ButtonType;
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
};
