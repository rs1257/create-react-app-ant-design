import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

describe('Handle change function should set date range state', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {
      //** This is to remove warning from a bug in the days.js library which incorrectly picks up formatting issue
    });
  });
  it('Should call setDateRange when dates changed', async () => {
    const setDateRange = jest.fn();
    const { queryByRole, findByPlaceholderText, queryByLabelText } = render(
      <DateRangePicker dateRange={null} setDateRange={setDateRange} />
    );
    const startDateInput = (await findByPlaceholderText('Start date')) as HTMLInputElement;
    const endDateInput = (await findByPlaceholderText('End date')) as HTMLInputElement;
    const clearButton = queryByLabelText('close-circle') as HTMLElement;
    const startDate = dayjs('11:59:59', 'HH:mm:ss').add(-4, 'day').format('YYYY-MM-DD HH:mm:ss');
    const endDate = dayjs('11:59:59', 'HH:mm:ss').add(-1, 'day').format('YYYY-MM-DD HH:mm:ss');
    await waitFor(() => {
      userEvent.click(clearButton);
    });
    await waitFor(() => {
      const button = queryByRole('button', { name: /ok/i }) as HTMLButtonElement;
      userEvent.type(startDateInput, startDate);
      userEvent.click(button);
      userEvent.type(endDateInput, endDate);
      userEvent.click(button);
    });
    await waitFor(() => {
      expect(setDateRange).toHaveBeenCalled();
    });
  });
});
