import { useEffect, useState } from 'react';
import useGetRequest from '../../api/useGetRequest';
import getRequestHandler from '../../api/getRequestHandler';
import { DataItemExplorerItem } from '../../types/api';
import { DataItemExplorerFolderList } from '../../types/data';
import FolderList from './FolderList';
import './DataItemExplorerFolderStructure.scss';

export const getTreeStructure = (
  currentStructure: DataItemExplorerFolderList[],
  newData: DataItemExplorerItem[],
  newLevel: number
): DataItemExplorerFolderList[] => {
  if (newLevel + 1 > currentStructure.length) {
    return [...currentStructure, { level: newLevel, items: newData }];
  }
  const newStructure = currentStructure.slice(0, newLevel);
  return [...newStructure, { level: newLevel, items: newData }];
};

export const setFolderStatus = (
  id: string,
  level: number,
  setId: (id: string) => void,
  setLevel: (level: number) => void
): void => {
  setId(id);
  setLevel(level + 1);
};

const FolderStructure = (): JSX.Element => {
  const apiUrl = process.env.REACT_APP_API || '';
  const url = `${apiUrl}/api/v2/DataItemCategoryTree`;
  const [selectedId, setSelectedId] = useState<string>('');
  const [treeLevel, setTreeLevel] = useState<number>(0);
  const [treeStructure, setTreeStructure] = useState<DataItemExplorerFolderList[]>([]);

  //TODO - remove 'initial' from end of this url when actually calling the API
  const { isLoading, error, data } = useGetRequest<DataItemExplorerItem[]>(
    `${apiUrl}/api/v2/DataItemCategoryTreeInitial`,
    ['dataItemExplorer']
  );

  useEffect(() => {
    if (data) {
      setTreeStructure((treeStructure) => getTreeStructure(treeStructure, data, treeLevel));
    }
  }, [data, error, isLoading, treeLevel]);

  const handleSelect = (id: string, level: number): void => {
    setFolderStatus(id, level, setSelectedId, setTreeLevel);
  };

  useEffect(() => {
    if (!selectedId) {
      return;
    }
    async (): Promise<void> => {
      await getRequestHandler(
        url,
        `?id=${selectedId}`,
        ({ children }: DataItemExplorerItem) => {
          children &&
            setTreeStructure((treeStructure) =>
              getTreeStructure(treeStructure, children, treeLevel)
            );
        },
        (error: Error): void => {
          // eslint-disable-next-line no-console
          console.log(error);
        }
      );
    };
  }, [selectedId, treeLevel, url]);

  return (
    <div className="folder-structure">
      {treeStructure.map((list, index) => (
        <FolderList key={index} list={list} handleSelect={handleSelect} />
      ))}
    </div>
  );
};

export default FolderStructure;
