import { useState } from 'react';
import { Payload } from 'recharts/types/component/DefaultLegendContent';
import { InteractiveLegend, Lines } from '../types/graphs';

const useInteractiveLegend = (value: string[]): InteractiveLegend => {
  const [lines, toggleLines] = useState<Lines>(
    value.reduce((acc, key) => {
      return { ...acc, [key]: false };
    }, {})
  );

  const selectLine = (data: Payload): void => {
    if (typeof data?.value === 'string') {
      toggleLines({
        ...lines,
        [data.value]: !lines[data.value],
      });
      setHover(undefined);
    }
  };

  const [hover, setHover] = useState<string>();

  const handleLegendMouseEnter = (data: Payload): void => {
    if (typeof data?.value === 'string') {
      if (!lines[data.value]) {
        setHover(data.value);
      }
    }
  };

  const handleLegendMouseLeave = (): void => {
    setHover(undefined);
  };

  return { lines, hover, selectLine, handleLegendMouseLeave, handleLegendMouseEnter };
};

export default useInteractiveLegend;
