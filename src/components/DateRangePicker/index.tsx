import { FC, ReactElement, useState } from 'react';
import { DatePicker as DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { EventValue, RangeValue } from 'rc-picker/lib/interface';
import { DateRangePickerProps } from '../../types/props';
import { DateRange } from '../../utils/dateTime';

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

export const getValue = (dateRange: [string, string]): RangeValue<Dayjs> => [
  dayjs(dateRange[DateRange.StartDate]),
  dayjs(dateRange[DateRange.EndDate]),
];

const DateRangePicker: FC<DateRangePickerProps> = ({
  dateRange,
  setDateRange,
  showTime = true,
}): ReactElement => {
  const defaultValue = getValue(dateRange);
  const [displayValue, setDisplayValue] = useState<
    [EventValue<dayjs.Dayjs>, EventValue<dayjs.Dayjs>] | null
  >(defaultValue);

  return (
    <div>
      <RangePicker
        allowClear
        value={displayValue}
        showTime={showTime}
        showNow
        onChange={(values: RangeValue<Dayjs>, formatString: [string, string]): void =>
          handleChange(values, formatString, setDisplayValue, setDateRange)
        }
      />
    </div>
  );
};

export default DateRangePicker;
