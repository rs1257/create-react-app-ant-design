import { act, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DataTable from '..';
import { DataTableDataType, DataTableHeader } from '../../../types/data';
import { columnSorter, getTextToHighlight } from '../Columns/Columns';
import { handleOnFilterTextChange } from '../Columns/FilterDropdown';

describe('table should render correct data', () => {
  const mockHeaders: DataTableHeader[] = [
    {
      title: 'System Entry Name',
      dataIndex: 'name',
    },
    {
      title: 'Flow Rate (mcm/d)',
      dataIndex: 'value',
    },
  ];

  const mockData: DataTableDataType[] = [
    {
      name: 'ALDBROUGH',
      value: 17.4330883026123,
    },
    {
      name: 'BACTON BBL',
      value: 2.94163513183594,
    },
    {
      name: 'BACTON IC',
      value: 1.2,
    },
    {
      name: 'HOLE HOUSE FARM',
      value: 3.111,
    },
    {
      name: 'HOLFORD',
      value: 16.2135677337646,
    },
    {
      name: 'HORNSEA',
      value: 5.29640674591064,
    },
    {
      name: 'MILFORD HAVEN - DRAGON',
      value: 26.8920555114746,
    },
    {
      name: 'MILFORD HAVEN - SOUTH HOOK',
      value: 50.5825996398926,
    },
  ];

  it('should filter name column correctly', async () => {
    const { findAllByRole, findByRole } = render(
      <DataTable headers={mockHeaders} data={mockData} />
    );
    const filterButtons = await findAllByRole('button', { name: 'filter' });

    await act(() => {
      userEvent.click(filterButtons[0]);
    });

    const searchInput = await findByRole('textbox');
    userEvent.type(searchInput, 'milford');
    const tRows = await findAllByRole('row');
    expect(tRows).toHaveLength(3);
  });

  it('should clear filters when reset button pressed', async () => {
    const { findAllByRole, findByRole } = render(
      <DataTable headers={mockHeaders} data={mockData} />
    );
    const filterButtons = await findAllByRole('button', { name: 'filter' });

    await act(() => {
      userEvent.click(filterButtons[1]);
    });

    const searchInput = await findByRole('textbox');
    const resetButton = await findByRole('button', { name: 'undo Reset' });

    await act(() => {
      userEvent.type(searchInput, '3.111');
    });
    expect(searchInput).toHaveValue('3.111');

    await waitFor(() => {
      userEvent.click(resetButton);
    });

    expect(searchInput).toHaveValue('');
  });

  it('should close filter dropdown on press enter', async () => {
    const { findAllByRole, findByRole, queryAllByRole } = render(
      <DataTable headers={mockHeaders} data={mockData} />
    );
    const filterButtons = await findAllByRole('button', { name: 'filter' });

    await act(() => {
      userEvent.click(filterButtons[1]);
    });

    const searchInput = await findByRole('textbox');
    const initialResetButton = queryAllByRole('button', { name: 'undo Reset' });

    await act(() => {
      userEvent.type(searchInput, '3.111{enter}');
    });
    const resetButton = queryAllByRole('button', { name: 'undo Reset' });

    expect(initialResetButton).toHaveLength(1);
    expect(resetButton).toHaveLength(0);
  });

  it('should close filter dropdown on ok button press', async () => {
    const { findAllByRole, findByRole, queryAllByRole } = render(
      <DataTable headers={mockHeaders} data={mockData} />
    );
    const filterButtons = await findAllByRole('button', { name: 'filter' });

    await act(() => {
      userEvent.click(filterButtons[1]);
    });

    const searchInput = await findByRole('textbox');
    const okButton = await findByRole('button', { name: 'check OK' });

    await act(() => {
      userEvent.type(searchInput, '3.111');
      userEvent.click(okButton);
    });
    const resetButton = queryAllByRole('button', { name: 'undo Reset' });

    expect(resetButton).toHaveLength(0);
  });

  it('should sort the name column alphabetically when sorter clicked', async () => {
    const { findByText, findAllByRole } = render(
      <DataTable headers={mockHeaders} data={mockData} />
    );
    const nameColumnSorter = await findByText(mockHeaders[0].title);
    await act(() => {
      userEvent.click(nameColumnSorter);
      userEvent.click(nameColumnSorter);
    });
    const tRows = await findAllByRole('row');
    expect(tRows[1]).toHaveTextContent(mockData[mockData.length - 1].name);
  });

  it('should correctly sort columns with strings alphabetically', () => {
    const nameKey: keyof DataTableDataType = 'name';
    const sortedByNameLowToHigh = columnSorter(mockData[0], mockData[1], nameKey);
    const sortedByNameHighToLow = columnSorter(mockData[1], mockData[0], nameKey);
    expect(sortedByNameLowToHigh).toEqual(-1);
    expect(sortedByNameHighToLow).toEqual(1);
  });

  it('should correctly sort columns with numbers numerically', () => {
    const valueKey: keyof DataTableDataType = 'value';
    const sortedByValueLowToHigh = columnSorter(mockData[0], mockData[1], valueKey);
    const sortedByValueHighToLow = columnSorter(mockData[1], mockData[0], valueKey);
    expect(sortedByValueLowToHigh).toEqual(mockData[0].value - mockData[1].value);
    expect(sortedByValueHighToLow).toEqual(mockData[1].value - mockData[0].value);
  });
});

describe('sorting and filtering functions should work as expected', () => {
  it('should pinpoint correct text to highlight', () => {
    const value = 'Name';
    const emptyValue = '';
    expect(getTextToHighlight(value)).toEqual(value);
    expect(getTextToHighlight(emptyValue)).toEqual(emptyValue);
  });

  it('should set selected keys when typing into filter input', () => {
    const value = 'Name';
    const setSelectedKeys = jest.fn();
    handleOnFilterTextChange(value, setSelectedKeys);
    expect(setSelectedKeys).toHaveBeenCalledWith([value]);
  });

  it('should set selected keys to empty string when no filter input', () => {
    const emptyValue = '';
    const setSelectedKeys = jest.fn();
    handleOnFilterTextChange(emptyValue, setSelectedKeys);
    expect(setSelectedKeys).toHaveBeenCalledWith([]);
  });
});
