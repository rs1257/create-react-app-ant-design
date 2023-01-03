import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import dayjs from 'dayjs';
import DatePicker from '..';

describe('should render dates correctly', () => {
  it('should render yesterday at midnight as default date when no date passed in', async () => {
    const setDate = jest.fn();
    const { findByPlaceholderText } = render(<DatePicker date={null} setDate={setDate} />);
    const defaultDate = dayjs('00:00:00', 'HH:mm:ss').add(-1, 'day').format('YYYY-MM-DD HH:mm:ss');
    const date = (await findByPlaceholderText('Select date')) as HTMLInputElement;
    expect(date.value).toEqual(defaultDate);
  });

  it('should render correct formatted date when date passed as a prop', async () => {
    const setDate = jest.fn();
    const date = '2022-09-12 12:00:00';
    const { findByPlaceholderText } = render(<DatePicker date={date} setDate={setDate} />);
    const startDate = (await findByPlaceholderText('Select date')) as HTMLInputElement;
    expect(startDate.value).toEqual(date);
  });
});

describe('Handle change function should set date state', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {
      //** This is to remove warning from a bug in the days.js library which incorrectly picks up formatting issue
    });
  });
  it('Should call setDate when date changed', async () => {
    const setDate = jest.fn();
    const { queryByRole, findByPlaceholderText, queryByLabelText } = render(
      <DatePicker date={null} setDate={setDate} />
    );
    const dateInput = (await findByPlaceholderText('Select date')) as HTMLInputElement;
    const clearButton = queryByLabelText('close-circle') as HTMLElement;
    const date = dayjs('11:59:59', 'HH:mm:ss').add(-4, 'day').format('YYYY-MM-DD HH:mm:ss');
    await waitFor(() => {
      userEvent.click(clearButton);
    });
    await waitFor(() => {
      const button = queryByRole('button', { name: /ok/i }) as HTMLButtonElement;
      userEvent.type(dateInput, date);
      userEvent.click(button);
    });
    await waitFor(() => {
      expect(setDate).toHaveBeenCalled();
    });
  });
});
