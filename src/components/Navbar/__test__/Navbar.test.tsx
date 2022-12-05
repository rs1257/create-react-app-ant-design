import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Navbar from '..';

describe('navbar component', () => {
  it('should match snapshot', async () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    await waitFor(() => {
      expect(screen).toMatchSnapshot();
    });
  });
});
