import { render, screen } from '@testing-library/react';
import Footer from '../../Footer';
import Layout from '..';
import Navbar from '../../Navbar';

describe('Layout component', () => {
  it('should display Layout component when rendered', () => {
    const { queryByText } = render(<Layout page={'page'} />);

    expect(queryByText('page')).toBeInTheDocument();
    expect(queryByText('header')).not.toBeInTheDocument();
    expect(queryByText('footer')).not.toBeInTheDocument();
  });

  it('should display header and footer within Layout', () => {
    render(<Layout page={'page'} header={<Navbar />} footer={<Footer />} />);

    expect(screen).toMatchSnapshot();
  });
});
