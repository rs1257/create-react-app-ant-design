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

export interface DataItemExplorerSoapResponse {
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

export interface InstantaneousFlowSoapResponse {
  'soap:Envelope': {
    'soap:Body': {
      GetInstantaneousFlowDataResponse: {
        GetInstantaneousFlowDataResult: {
          EDPReportPage: InstantaneousFlowResponseData;
        };
      };
    };
  };
}

export interface PublicationObjectDataItem {
  ApplicableAt: string;
  ApplicableFor: string;
  Value: number;
  GeneratedTimeStamp: string;
  QualityIndicator: string;
  Substituted: string;
  CreatedDate: string;
}

export interface DataItemExplorerDataItem {
  PublicationObjectName: string;
  PublicationObjectData: { CLSPublicationObjectDataBE: PublicationObjectDataItem[] };
}

export enum InstantaneousFlowTableDescription {
  zoneSupply = 'Zone Supply',
  terminalSupply = 'Terminal Supply',
  totalSupply = 'Total Supply',
  categoryDemandFlow = 'Category Demand Flow',
  interconnectorFlow = 'Interconnector Flow',
  totalDemand = 'Total Demand',
  actualLinepack = 'NTS Actual Linepack',
}

export interface InstantaneousFlowDataItem {
  ApplicableAt: string;
  FlowRate: number;
  QualityIndicator: 'E' | null;
  ScheduleTime: string;
}

export interface InstantaneousFlowDataSet {
  EDPObjectName: string;
  EnergyDataList: { EDPEnergyDataBE: InstantaneousFlowDataItem[] };
}

export interface InstantaneousFlowDataSetCollection {
  EDPEnergyGraphTableName: string;
  ItemPosition: number;
  EDPObjectCollection: { EDPObjectBE: InstantaneousFlowDataSet[] | InstantaneousFlowDataSet };
  Description: InstantaneousFlowTableDescription;
}

export interface InstantaneousFlowResponseData {
  PageName: string;
  CurrentGasDay: string;
  EDPEnergyGraphTableCollection: { EDPEnergyGraphTableBE: InstantaneousFlowDataSetCollection[] };
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
  data: T[];
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

export type GraphResponseData = DataApiResponse<GraphApiResponseData>;
export type LatestSupplyEntryPointResponseData = DataApiResponse<SystemEntryPointData>;
