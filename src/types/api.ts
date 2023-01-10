import { SupplyDemandData } from './graphs';
import { DataItemExplorerDataItem } from './tables';

//* Request

export enum SoapRequestDateType {
  gas = 'GASDAY',
  normal = 'NORMALDAY',
}

export enum SoapRequestBoolean {
  true = 'Y',
  false = 'N',
}
export interface DataItemExplorerRequestProps {
  latestFlag: SoapRequestBoolean;
  applicableFor: SoapRequestBoolean;
  dateTo: string;
  dateFrom: string;
  dateType: SoapRequestDateType;
  names: string[];
}

//* Response
export interface ApiResponse<T> {
  isLoading: boolean;
  error: Error | null;
  data?: T;
}

export interface SoapResponse {
  'soap:Envelope': {
    'soap:Body': {
      GetPublicationDataWMResponse: {
        GetPublicationDataWMResult: {
          CLSMIPIPublicationObjectBE: DataItemExplorerDataItem[];
        };
      };
    };
  };
}

export interface GasDay {
  day: string;
  startUtc: string;
  endUtc: string;
  startUkLocalTime: string;
  endUkLocalTime: string;
}

export interface Message {
  qualityIndicator?: string | null;
  applicableAtTime?: string | null;
  displayValue?: string | null;
}

export interface StatusData {
  value: number | null;
  applicableAt: string | null;
  applicableAtUkLocalTime: string | null;
  qualityIndicator: string | null;
  publicationObjectName: string | null;
  applicableFor: string | null;
  generatedTimeStamp: string | null;
  generatedTimeStampUkLocalTime: string | null;
  rawDisplayValue: number | null;
}

export interface SystemStatus {
  gbnToday: StatusData;
  gbnTomorrow: StatusData;
  mnTriggerToday: StatusData;
  mnTriggerTomorrow: StatusData;
}

export interface ForecastMarginsTableRawData {
  header: string[];
  mnData: string[];
  demandData: string[];
}

export interface ForecastMarginsNoticeAndDemandResponseData {
  gasDay: GasDay;
  ansMessages: {
    ansMessages: Message[];
  };
  systemMessages: {
    systemMessages: Message[];
  };
  systemStatus: SystemStatus;
  demandForecastToday: StatusData;
  demandForecastTomorrow: StatusData;
  mntriggerdemandforecastweekly: ForecastMarginsTableRawData;
}

export interface SystemEntryPointData {
  value: number;
  applicableAt: string;
  applicableAtUkLocalTime: string;
  name: string;
}

export interface DataApiResponse<T> {
  gasDay: GasDay;
  data: T;
}

export enum DataItemExplorerNodeType {
  data = 'DataType',
  folder = 'Folder',
}

export interface DataItemExplorerItem {
  dataItemCategoryTreeNodeId: string;
  name: string;
  uniqueId: string | null;
  stagingId: string | null;
  children: DataItemExplorerItem[] | null;
  nodeType: DataItemExplorerNodeType;
  description: string | null;
  publicationObjectCount: number;
  selected?: boolean;
}

export interface GraphApiResponseData {
  value: number;
  applicableAt: string;
  applicableAtUkLocalTime: string;
  qualityIndicator: null;
  publicationObjectName: string;
  applicableFor: string;
  generatedTimeStamp: string;
  generatedTimeStampUkLocalTime: string;
  rawDisplayValue: string;
}

export type GraphResponseData = DataApiResponse<GraphApiResponseData[]>;
export type SupplyDemandResponseData = DataApiResponse<SupplyDemandData>;
export type LatestSupplyEntryPointResponseData = DataApiResponse<SystemEntryPointData[]>;
