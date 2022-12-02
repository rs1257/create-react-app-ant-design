import { render } from '@testing-library/react';
import App from '..';

describe('App component', () => {
  it('should display App component when rendered', () => {
    const { container } = render(<App />);

    expect(container).toBeTruthy();
  });
});
