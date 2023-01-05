import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import dataItemExplorerFolderTreeInitial from '../../../data/dataItemExplorerFolderTreeInitial.json';
import dataItemExplorerCategoryTree from '../../../data/dataItemExplorerCategoryTree.json';
import DataItemExplorerFolderStructure, { getTreeStructure, setFolderStatus } from '../index';
import FolderItem from '../FolderItem';
import FolderList from '../FolderList';
import { DataItemExplorerFolderList } from '../../../types/data';
import { DataItemExplorerItem } from '../../../types/api';

const client = new QueryClient();

describe('Components should render correctly', () => {
  const folders = dataItemExplorerFolderTreeInitial;

  it('should render folder list with correct props passed', async () => {
    const { findByText } = render(
      <QueryClientProvider client={client}>
        <DataItemExplorerFolderStructure />
      </QueryClientProvider>
    );
    const balancing = await findByText(folders[0].name);
    expect(balancing).toBeInTheDocument();
  });

  it('should highlight folder background if selected', async () => {
    const { dataItemCategoryTreeNodeId: id, name } = folders[0];
    const handleSelect = jest.fn();
    const setItemSelected = jest.fn();
    const { findByText } = render(
      <QueryClientProvider client={client}>
        <FolderItem
          id={id}
          name={name}
          level={0}
          handleSelect={handleSelect}
          setItemSelected={setItemSelected}
          selected
        />
      </QueryClientProvider>
    );
    const balancing = await findByText(folders[0].name);
    expect(balancing).toHaveStyle(
      'background-image: linear-gradient(to right, g.$ngt-light-blue, g.$ngt-teal)'
    );
  });
});

describe('Clicking folder', () => {
  it('should call handle select and set selected item on folder click', async () => {
    const handleSelect = jest.fn();
    const setItemSelected = jest.fn();
    const folders = dataItemExplorerFolderTreeInitial;
    const { dataItemCategoryTreeNodeId: id, name } = folders[0];
    const { findAllByRole } = render(
      <QueryClientProvider client={client}>
        <FolderItem
          id={id}
          name={name}
          level={0}
          handleSelect={handleSelect}
          setItemSelected={setItemSelected}
        />
      </QueryClientProvider>
    );
    const selectButtons = await findAllByRole('button');
    await act(() => {
      userEvent.click(selectButtons[0]);
    });
    expect(handleSelect).toHaveBeenCalled();
    expect(setItemSelected).toHaveBeenCalled();
  });

  it('should set selected to true on selected folder item, and false on all others', async () => {
    const handleSelect = jest.fn();
    const folders = dataItemExplorerFolderTreeInitial as DataItemExplorerItem[];
    const list: DataItemExplorerFolderList = {
      level: 0,
      items: folders,
    };
    const { findAllByRole } = render(
      <QueryClientProvider client={client}>
        <FolderList list={list} handleSelect={handleSelect} />
      </QueryClientProvider>
    );
    const selectButtons = await findAllByRole('button');
    await act(() => {
      userEvent.click(selectButtons[0]);
    });
    list.items.forEach((item) => {
      if (item.name === folders[0].name) {
        expect(item.selected).toBeTruthy();
      } else {
        expect(item.selected).not.toBeTruthy();
      }
    });
  });

  it('should create new folder structure when a different folder selected', () => {
    const parentFolderList = dataItemExplorerFolderTreeInitial as DataItemExplorerItem[];
    const nestedFolderList = dataItemExplorerCategoryTree.children as DataItemExplorerItem[];
    const list: DataItemExplorerFolderList[] = [
      {
        level: 0,
        items: parentFolderList,
      },
      {
        level: 1,
        items: nestedFolderList,
      },
      {
        level: 2,
        items: nestedFolderList,
      },
    ];
    const newStructure = getTreeStructure(list, nestedFolderList, 1);
    expect(newStructure).toHaveLength(2);
  });

  it('should set correct folder status', () => {
    const id = '123';
    const level = 2;
    const setId = jest.fn();
    const setLevel = jest.fn();
    setFolderStatus(id, level, setId, setLevel);
    expect(setId).toHaveBeenCalledWith(id);
    expect(setLevel).toHaveBeenCalledWith(level + 1);
  });

  it('should fire axios request when folder opened', async () => {
    const axiosSpy = jest.spyOn(axios, 'get');
    const { findAllByRole } = render(
      <QueryClientProvider client={client}>
        <DataItemExplorerFolderStructure />
      </QueryClientProvider>
    );
    const selectButtons = await findAllByRole('button');
    await act(() => {
      userEvent.click(selectButtons[0]);
    });
    await waitFor(() => {
      expect(axiosSpy).toBeCalled();
    });
  });
});
