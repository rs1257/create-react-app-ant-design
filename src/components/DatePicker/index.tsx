import { FC, ReactElement, useState } from 'react';
import { DatePicker as AntDatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { EventValue } from 'rc-picker/lib/interface';
import { DatePickerProps } from '../../types/props';

export const handleChange = (
  value: Dayjs | null,
  formatString: string,
  setDisplayValue: (value: Dayjs) => void,
  setDate: (value: string) => void
): void => {
  setDisplayValue(value ?? getValue());
  setDate(formatString);
};

export const getValue = (date?: string | null): Dayjs => {
  if (date) return dayjs(date);
  return dayjs('00:00:00', 'HH:mm:ss').add(-1, 'day');
};

const DatePicker: FC<DatePickerProps> = ({ date, setDate }): ReactElement => {
  const defaultValue = getValue(date);
  const [displayValue, setDisplayValue] = useState<EventValue<dayjs.Dayjs>>(defaultValue);

  return (
    <div className="date-picker">
      <AntDatePicker
        allowClear
        value={displayValue}
        showTime
        showNow
        onChange={(value: Dayjs | null, formatString: string): void =>
          handleChange(value, formatString, setDisplayValue, setDate)
        }
      />
    </div>
  );
};

export default DatePicker;
