import { FC, ReactElement, useState } from 'react';
import { DatePicker as DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { EventValue, RangeValue } from 'rc-picker/lib/interface';
import './DateRangePicker.scss';
import { DateRangePickerProps } from '../../types/props';

const { RangePicker } = DatePicker;

export const handleChange = (
  values: RangeValue<Dayjs>,
  formatString: [string, string],
  setDisplayValue: (values: RangeValue<Dayjs>) => void,
  setDateRange: (values: [string, string]) => void
): void => {
  setDisplayValue(values);
  setDateRange(formatString);
};

export const getValue = (dateRange?: [string, string] | null): RangeValue<Dayjs> => {
  if (dateRange) {
    return [dayjs(dateRange[0]), dayjs(dateRange[1])];
  }
  return [
    dayjs('00:00:00', 'HH:mm:ss').add(-1, 'day'),
    dayjs('11:59:59', 'HH:mm:ss').add(-1, 'day'),
  ];
};

const DateRangePicker: FC<DateRangePickerProps> = ({ dateRange, setDateRange }): ReactElement => {
  const defaultValue = getValue(dateRange);
  const [displayValue, setDisplayValue] = useState<
    [EventValue<dayjs.Dayjs>, EventValue<dayjs.Dayjs>] | null
  >(defaultValue);

  return (
    <div className="date-picker">
      <RangePicker
        allowClear
        value={displayValue}
        showTime={{ defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('11:59:59', 'HH:mm:ss')] }}
        showNow
        onChange={(values: RangeValue<Dayjs>, formatString: [string, string]): void =>
          handleChange(values, formatString, setDisplayValue, setDateRange)
        }
      />
    </div>
  );
};

export default DateRangePicker;
