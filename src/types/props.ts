import { ButtonType } from 'antd/es/button';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { ReactNode } from 'react';

//** Components

export interface CustomButtonProps {
  size?: SizeType;
  type?: ButtonType;
  icon?: ReactNode | null;
  disabled?: boolean;
  danger?: boolean;
  onClick: () => void;
  children: ReactNode;
}

export type LinkButtonProps = {
  size?: SizeType;
  href: string;
  target?: string;
  danger?: boolean;
  icon?: ReactNode | null;
  children: ReactNode;
};

export interface DateRangePickerProps {
  dateRange?: [string, string] | null;
  setDateRange: (date: [string, string]) => void;
}

//** Pages
