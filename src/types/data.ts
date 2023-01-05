import { DataItemExplorerItem } from './api';

export interface DataItemExplorerFolderList {
  level: number;
  items: DataItemExplorerItem[];
}

export interface FolderTreeError {
  level?: number;
  error?: string;
}

export interface FolderTreeLoading {
  level?: number;
  loading?: boolean;
}

export interface formValues {
  request: Record<string, string>;
}

export type Applicable = 'applicableAt' | 'applicableFor';

export interface DataItemExplorerFormData {
  latestValues: boolean;
  applicable: Applicable;
}
