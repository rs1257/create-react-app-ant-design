import { render } from '@testing-library/react';
import LinkButton from '..';

describe('LinkButton component', () => {
  it('should display CustomButton component when rendered', () => {
    const { queryByText } = render(<LinkButton href="#">Click me</LinkButton>);

    expect(queryByText('Click me')).toBeInTheDocument();
  });
});
