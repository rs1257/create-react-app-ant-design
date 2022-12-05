import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Layout from '..';
import { act } from 'react-dom/test-utils';

describe('Layout component', () => {
  it('should display Layout component when rendered', async () => {
    const { queryByText } = render(<Layout page={'page'} />);
    await act(() => {
      expect(queryByText('page')).toBeInTheDocument();
      expect(queryByText('header')).not.toBeInTheDocument();
      expect(queryByText('footer')).not.toBeInTheDocument();
    });
  });

  it('should display header and footer within Layout', async () => {
    const { queryByText } = render(
      <Router>
        <Layout page={'page'} header={'navbar'} footer={'footer'} />
      </Router>
    );
    await act(() => {
      expect(queryByText('navbar')).toBeInTheDocument();
      expect(queryByText('footer')).toBeInTheDocument();
    });
  });
});
