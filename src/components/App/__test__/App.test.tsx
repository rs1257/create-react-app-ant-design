import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from '..';

describe('App component', () => {
  it('should display App component when rendered', async () => {
    const { container } = render(<App />);
    await act(() => {
      expect(container).toBeTruthy();
    });
  });
});
