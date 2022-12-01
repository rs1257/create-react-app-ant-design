import { render } from '@testing-library/react';
import PageNotFound from '../PageNotFound';

describe('Layout component', () => {
  it('should display Layout component when rendered', () => {
    const { queryByText } = render(<PageNotFound />);

    expect(queryByText('404: Page not found')).toBeInTheDocument();
  });
});
