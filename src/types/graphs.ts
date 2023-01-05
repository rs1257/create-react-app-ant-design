import { Payload } from 'recharts/types/component/DefaultLegendContent';

export interface Graph {
  name: string;
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
