import { act, render } from '@testing-library/react';
import { Button } from 'antd';
import useInteractiveLegend from '../useInteractiveLegend';

interface InteractiveLegendTestComponentProps {
  payload?: { value: string | number | boolean };
}

const InteractiveLegendTestComponent = ({
  payload = { value: 'one' },
}: InteractiveLegendTestComponentProps): JSX.Element => {
  const { lines, hover, selectLine, handleLegendMouseLeave, handleLegendMouseEnter } =
    useInteractiveLegend(['one', 'two']);

  const selectLineWrapper = (): void => selectLine(payload);
  const handleLegendMouseEnterWrapper = (): void => handleLegendMouseEnter(payload);

  return (
    <>
      <Button data-testid="select" onClick={selectLineWrapper}>
        Select Line
      </Button>
      <Button data-testid="enter" onClick={handleLegendMouseEnterWrapper}>
        Handle Legend Mouse Enter
      </Button>
      <Button data-testid="leave" onClick={handleLegendMouseLeave}>
        Handle Legend Mouse Leave
      </Button>
      <ul data-testid="lines">
        {Object.entries(lines).map((line, index) => (
          <li data-testid={`line-${index}`} key={index}>
            {`${line[0]}: ${String(line[1])}`}
          </li>
        ))}
      </ul>
      <p data-testid="hover">{hover ? hover.toString() : 'undefined'}</p>
    </>
  );
};

describe('useInteractiveLegend Custom Hook', () => {
  it('should correctly update hover when on legend mouse enter event', async () => {
    const { getByTestId } = render(<InteractiveLegendTestComponent />);

    await act(() => {
      const enterBtn = getByTestId('enter');
      enterBtn.click();
    });

    const hover = getByTestId('hover');
    expect(hover.textContent).toEqual('one');
  });

  it('should reset hover on legend mouse leave event', async () => {
    const { getByTestId } = render(<InteractiveLegendTestComponent />);

    await act(() => {
      const enterBtn = getByTestId('enter');
      enterBtn.click();
    });

    await act(() => {
      const leaveBtn = getByTestId('leave');
      leaveBtn.click();
    });

    const hover = getByTestId('hover');
    expect(hover.textContent).toEqual('undefined');
  });

  it('should reset hover and toggle lines', async () => {
    const { getByTestId } = render(<InteractiveLegendTestComponent />);

    await act(() => {
      const enterBtn = getByTestId('enter');
      enterBtn.click();
    });

    await act(() => {
      const selectBtn = getByTestId('select');
      selectBtn.click();
    });

    const hover = getByTestId('hover');
    expect(hover.textContent).toEqual('undefined');

    const lineZero = getByTestId('line-0');
    const lineOne = getByTestId('line-1');
    expect(lineZero.textContent).toEqual('one: true');
    expect(lineOne.textContent).toEqual('two: false');
  });

  it('should do nothing when select line called with a non string value', async () => {
    const { getByTestId } = render(<InteractiveLegendTestComponent payload={{ value: 1 }} />);

    await act(() => {
      const enterBtn = getByTestId('enter');
      enterBtn.click();
    });

    await act(() => {
      const selectBtn = getByTestId('select');
      selectBtn.click();
    });

    const hover = getByTestId('hover');
    expect(hover.textContent).toEqual('undefined');

    const lineZero = getByTestId('line-0');
    const lineOne = getByTestId('line-1');
    expect(lineZero.textContent).toEqual('one: false');
    expect(lineOne.textContent).toEqual('two: false');
  });

  it('should do nothing when handleLegendMouseEnter called with a non string value', async () => {
    const { getByTestId } = render(<InteractiveLegendTestComponent payload={{ value: true }} />);

    await act(() => {
      const enterBtn = getByTestId('enter');
      enterBtn.click();
    });

    const hover = getByTestId('hover');
    expect(hover.textContent).toEqual('undefined');
  });

  it('should disable on hover if line is unselected', async () => {
    const { getByTestId } = render(<InteractiveLegendTestComponent />);

    await act(() => {
      const selectBtn = getByTestId('select');
      selectBtn.click();
    });

    await act(() => {
      const enterBtn = getByTestId('enter');
      enterBtn.click();
    });

    const hover = getByTestId('hover');
    expect(hover.textContent).toEqual('undefined');

    const lineZero = getByTestId('line-0');
    const lineOne = getByTestId('line-1');
    expect(lineZero.textContent).toEqual('one: true');
    expect(lineOne.textContent).toEqual('two: false');
  });
});
