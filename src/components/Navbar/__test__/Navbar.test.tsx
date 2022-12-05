import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Navbar from '..';
import navRoutes from '../../../config/nav-routes';
import userEvent from '@testing-library/user-event';

describe('navbar component', () => {
  it('should route to the correct pages', async () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    await waitFor(() => {
      navRoutes.forEach(({ label, key }) => {
        const link = screen.getByRole('menuitem', { name: String(label) });
        userEvent.click(link);
        expect(window.location.href).toContain(key);
      });
    });
  });
});
