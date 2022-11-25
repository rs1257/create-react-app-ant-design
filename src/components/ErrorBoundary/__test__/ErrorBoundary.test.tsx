import { render, screen } from '@testing-library/react';
import { useEffect } from 'react';
import ErrorBoundary from '..';

const ErrorTestComponent = (): JSX.Element => {
  useEffect(() => {
    throw new Error('Test Error');
  }, []);

  return <div></div>;
};

const ValidTestComponent = (): JSX.Element => {
  return <div>Valid</div>;
};

describe('Error Boundary', () => {
  it('Should catch error in component', () => {
    render(
      <ErrorBoundary>
        <ErrorTestComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText('Oops... Something went wrong.')).toBeInTheDocument();
    expect(screen.getByText('Error: Test Error')).toBeInTheDocument();
  });

  it('Should not render when no error', () => {
    render(
      <ErrorBoundary>
        <ValidTestComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText('Valid')).toBeInTheDocument();
    expect(screen.queryByText('Oops... Something went wrong.')).not.toBeInTheDocument();
    expect(screen.queryByText('Error: Test Error')).not.toBeInTheDocument();
  });
});
