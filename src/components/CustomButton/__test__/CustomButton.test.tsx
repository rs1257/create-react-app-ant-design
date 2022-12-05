import { render } from '@testing-library/react';
import CustomButton from '..';

describe('CustomButton component', () => {
  it('should display CustomButton component when rendered', () => {
    const { queryByText } = render(
      <CustomButton
        onClick={(): void => {
          return;
        }}
      >
        Click me
      </CustomButton>
    );

    expect(queryByText('Click me')).toBeInTheDocument();
  });
});
