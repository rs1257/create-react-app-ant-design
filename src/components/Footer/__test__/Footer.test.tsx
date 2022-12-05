import { render, waitFor } from '@testing-library/react';
import Footer from '..';

describe('footer component', () => {
  it('should display current year', async () => {
    const { queryByText } = render(<Footer />);
    await waitFor(() => {
      const currentYear = new Date().getFullYear();
      const currentYearText = queryByText(`National Grid ©${currentYear}`);
      expect(currentYearText).toBeInTheDocument();
    });
  });
});
