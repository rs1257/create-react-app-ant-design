import { render } from '@testing-library/react';
import dayjs from 'dayjs';
import DateRangePicker from '..';

describe('should render dates correctly', () => {
  it('should render yesterday at midnight as default start date when no dates passed', async () => {
    const setDateRange = jest.fn();
    const { findByPlaceholderText } = render(
      <DateRangePicker dateRange={null} setDateRange={setDateRange} />
    );
    const defaultStartDate = dayjs('00:00:00', 'HH:mm:ss')
      .add(-1, 'day')
      .format('YYYY-MM-DD HH:mm:ss');
    const startDate = (await findByPlaceholderText('Start date')) as HTMLInputElement;
    expect(startDate.value).toEqual(defaultStartDate);
  });

  it('should render yesterday at 23:59:59 as default end date when no dates passed', async () => {
    const setDateRange = jest.fn();
    const { findByPlaceholderText } = render(
      <DateRangePicker dateRange={null} setDateRange={setDateRange} />
    );
    const defaultEndDate = dayjs('11:59:59', 'HH:mm:ss')
      .add(-1, 'day')
      .format('YYYY-MM-DD HH:mm:ss');
    const endDate = (await findByPlaceholderText('End date')) as HTMLInputElement;
    expect(endDate.value).toEqual(defaultEndDate);
  });

  it('should render correct formatted start date when dates passed as a prop', async () => {
    const setDateRange = jest.fn();
    const dates: [string, string] = ['2022-09-12 12:00:00', '2022-10-12 12:00:00'];
    const { findByPlaceholderText } = render(
      <DateRangePicker dateRange={dates} setDateRange={setDateRange} />
    );
    const startDate = (await findByPlaceholderText('Start date')) as HTMLInputElement;
    expect(startDate.value).toEqual(dates[0]);
  });

  it('should render correct formatted end date when dates passed as a prop', async () => {
    const setDateRange = jest.fn();
    const dates: [string, string] = ['2022-09-12 12:00:00', '2022-10-12 12:00:00'];
    const { findByPlaceholderText } = render(
      <DateRangePicker dateRange={dates} setDateRange={setDateRange} />
    );
    const endDate = (await findByPlaceholderText('End date')) as HTMLInputElement;
    expect(endDate.value).toEqual(dates[1]);
  });
});
