import { render, waitFor } from '@testing-library/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { client } from '../../../mockQueryClient';
import DataItemExplorer from '..';
import { getDefaultDateRange } from '../../../utils/dateTime';
import userEvent from '@testing-library/user-event';

describe('DataItemExplorer component', () => {
  it('should display DataItemExplorer component when rendered', () => {
    const { queryByText } = render(
      <QueryClientProvider client={client}>
        <DataItemExplorer />
      </QueryClientProvider>
    );

    expect(queryByText('Data Item Explorer')).toBeInTheDocument();
  });

  it('should display time in the DateRangePicker if ApplicableAt is selected', async () => {
    const { findByPlaceholderText, queryByLabelText } = render(
      <QueryClientProvider client={client}>
        <DataItemExplorer />
      </QueryClientProvider>
    );

    const [defaultStartDate, defaultEndDate] = getDefaultDateRange();
    const startDate = (await findByPlaceholderText('Start date')) as HTMLInputElement;
    const endDate = (await findByPlaceholderText('End date')) as HTMLInputElement;

    const radioApplicableAt = queryByLabelText('Applicable At') as HTMLElement;
    expect(radioApplicableAt).toBeInTheDocument();
    await waitFor(() => {
      userEvent.click(radioApplicableAt);
    });

    expect(startDate.value).toEqual(defaultStartDate);
    expect(endDate.value).toEqual(defaultEndDate);
  });

  it('should NOT display time in the DateRangePicker if ApplicableFor is selected', async () => {
    const { findByPlaceholderText, queryByLabelText } = render(
      <QueryClientProvider client={client}>
        <DataItemExplorer />
      </QueryClientProvider>
    );

    const [defaultStartDate, defaultEndDate] = getDefaultDateRange();
    const defaultStartDateNoTime = defaultStartDate.split(' ')[0];
    const defaultEndDateNoTime = defaultEndDate.split(' ')[0];

    const startDate = (await findByPlaceholderText('Start date')) as HTMLInputElement;
    const endDate = (await findByPlaceholderText('End date')) as HTMLInputElement;

    const radioApplicableFor = queryByLabelText('Applicable For') as HTMLElement;
    expect(radioApplicableFor).toBeInTheDocument();
    await waitFor(() => {
      userEvent.click(radioApplicableFor);
    });

    expect(startDate.value).toEqual(defaultStartDateNoTime);
    expect(endDate.value).toEqual(defaultEndDateNoTime);
  });

  it('should submit NORMALDAY and latestValues successfully', async () => {
    const { getByRole } = render(
      <QueryClientProvider client={client}>
        <DataItemExplorer />
      </QueryClientProvider>
    );

    const latestValues = getByRole('checkbox');
    const submitButton = getByRole('button', { name: 'View Data for Data Items' });

    await waitFor(() => {
      userEvent.click(latestValues);
    });

    expect(latestValues).toHaveProperty('checked', true);

    await waitFor(() => {
      userEvent.click(submitButton);
    });

    // expect submitted values to equal form values
  });

  it('should submit GASDAY and NOT latestValues successfully', async () => {
    const { getByRole, queryByLabelText } = render(
      <QueryClientProvider client={client}>
        <DataItemExplorer />
      </QueryClientProvider>
    );

    const radioApplicableFor = queryByLabelText('Applicable For') as HTMLElement;
    expect(radioApplicableFor).toBeInTheDocument();

    await waitFor(() => {
      userEvent.click(radioApplicableFor);
    });

    const submitButton = getByRole('button', { name: 'View Data for Data Items' });

    await waitFor(() => {
      userEvent.click(submitButton);
    });

    // expect submitted values to equal form values
  });
});
