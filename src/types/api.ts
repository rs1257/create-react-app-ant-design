export interface ApiResponse<T> {
  isLoading: boolean;
  error: Error | null;
  data?: T;
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

export interface forecastMarginsNoticeAndDemandResponseData {
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
