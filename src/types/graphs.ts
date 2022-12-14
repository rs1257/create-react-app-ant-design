import { Payload } from 'recharts/types/component/DefaultLegendContent';

export interface Graph {
  name: string;
}

export interface SupplyDemandData {
  supply: Record<string, unknown>[];
  demand: Record<string, unknown>[];
}

export enum SupplyDemandPublicationObjectName {
  supply = 'Supply',
  demand = 'Demand',
}

export interface StorageStockData {
  current: Record<string, unknown>[];
  previous: Record<string, unknown>[];
}

export enum StorageStockPublicationObjectName {
  current = 'CURRENT',
  previous = 'PREVIOUS',
}

export interface BarChartDataType {
  name: string;
  value: number;
}

export interface BarChartProps {
  chartData: BarChartDataType[];
  xAxisLabel?: string;
  yAxisLabel?: string;
  chartName?: string;
}

export enum InstantaneousFlowChartTitle {
  latestFlows = 'Latest Available Instantaneous Flows Into the NTS',
  latestCategoryDemandFlows = 'Latest Available Instantaneous Category Demand Flows',
}

//* Hooks

export interface Lines {
  [key: string]: boolean;
}

export interface InteractiveLegend {
  lines: Lines;
  hover: string | undefined;
  selectLine: (data: Payload) => void;
  handleLegendMouseLeave: () => void;
  handleLegendMouseEnter: (data: Payload) => void;
}

//* Tests

export interface InteractiveLegendTestComponentProps {
  payload?: { value: string | number | boolean };
}
