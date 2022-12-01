import { render } from '@testing-library/react';
import Layout from '..';

describe('Layout component', () => {
  it('should display Layout component when rendered', () => {
    const { queryByText } = render(<Layout page={'page'} />);

    expect(queryByText('page')).toBeInTheDocument();
    expect(queryByText('header')).not.toBeInTheDocument();
    expect(queryByText('footer')).not.toBeInTheDocument();
  });

  it('should display header and footer within Layout', () => {
    const { queryByText } = render(<Layout page={'page'} header={'header'} footer={'footer'} />);

    expect(queryByText('page')).toBeInTheDocument();
    expect(queryByText('header')).toBeInTheDocument();
    expect(queryByText('footer')).toBeInTheDocument();
  });
});
