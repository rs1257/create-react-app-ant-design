import { render, screen } from '@testing-library/react';
import Footer from '..';

describe('footer component', () => {
  it('should match snapshot', () => {
    render(<Footer />);
    expect(screen).toMatchSnapshot();
  });
});
