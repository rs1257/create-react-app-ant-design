import { render, screen } from '@testing-library/react';
import Navbar from '..';

describe('navbar component', () => {
  it('should match snapshot', () => {
    render(<Navbar />);
    expect(screen).toMatchSnapshot();
  });
});
