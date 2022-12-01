import { render } from '@testing-library/react';
import UserDefinedDownload from '..';

describe('UserDefinedDownload component', () => {
  it('should display UserDefinedDownload component when rendered', () => {
    const { queryByText } = render(<UserDefinedDownload />);

    expect(queryByText('User Defined Download')).toBeInTheDocument();
  });
});
