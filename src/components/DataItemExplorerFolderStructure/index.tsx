import { useEffect, useState } from 'react';
import useGetRequest from '../../api/useGetRequest';
import getRequestHandler from '../../api/getRequestHandler';
import { DataItemExplorerItem } from '../../types/api';
import { DataItemExplorerFolderList } from '../../types/data';
import FolderList from './FolderList';
import './DataItemExplorerFolderStructure.scss';

const FolderStructure = (): JSX.Element => {
  const url = 'https://mip-prd-web.azurewebsites.net/api/v2/DataItemCategoryTree';
  const [selectedId, setSelectedId] = useState<string>('');
  const [treeLevel, setTreeLevel] = useState<number>(0);
  const [treeStructure, setTreeStructure] = useState<DataItemExplorerFolderList[]>([]);

  //TODO - remove 'initial' from end of this url when actually calling the API
  const { isLoading, error, data } = useGetRequest<DataItemExplorerItem[]>(
    'https://mip-prd-web.azurewebsites.net/api/v2/DataItemCategoryTreeInitial',
    ['forecastMarginsTable']
  );

  useEffect(() => {
    if (data) {
      setTreeStructure((treeStructure) => getTreeStructure(treeStructure, data, treeLevel));
    }
  }, [data, error, isLoading, treeLevel]);

  const handleSelect = (id: string, level: number): void => {
    setSelectedId(id);
    setTreeLevel(level + 1);
  };

  useEffect(() => {
    if (!selectedId) {
      return;
    }
    getRequestHandler(
      url,
      `?id=${selectedId}`,
      ({ children }: DataItemExplorerItem) => {
        children &&
          setTreeStructure((treeStructure) => getTreeStructure(treeStructure, children, treeLevel));
      },
      (error: Error): void => {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    );
  }, [selectedId, treeLevel]);

  const getTreeStructure = (
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

  return (
    <div className="folder-structure">
      {treeStructure.map((list, index) => (
        <FolderList key={index} list={list} handleSelect={handleSelect} />
      ))}
    </div>
  );
};

export default FolderStructure;
