import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EmailSubmissionForm from '..';
//** Removes incorrect email invalidation on tests
//eslint-disable-next-line
// @ts-ignore
global.ASYNC_VALIDATOR_NO_WARNING = 1;

describe('should have empty fields by default', () => {
  const submitRequest = jest.fn();
  const { queryByRole } = render(<EmailSubmissionForm submitRequest={submitRequest} />);
  const nameInput = queryByRole('textbox', { name: 'Name' });
  const emailInput = queryByRole('textbox', { name: 'Email' });
  const requestInput = queryByRole('textbox', { name: 'Requested Data' });
  it('Should have empty name input by default', () => {
    expect(nameInput).toHaveTextContent('');
  });
  it('Should have empty email input by default', () => {
    expect(emailInput).toHaveTextContent('');
  });
  it('Should have empty name input by default', () => {
    expect(requestInput).toHaveTextContent('');
  });
});

describe('should type text correctly', () => {
  const submitRequest = jest.fn();
  it('should insert text into name input', async () => {
    render(<EmailSubmissionForm submitRequest={submitRequest} />);
    const nameInput = await screen.findByRole('textbox', { name: 'Name' });
    await act(() => {
      userEvent.type(nameInput, 'Test Name');
    });

    expect(nameInput).toHaveValue('Test Name');
  });
  it('should insert text into email input', async () => {
    render(<EmailSubmissionForm submitRequest={submitRequest} />);
    const emailInput = await screen.findByRole('textbox', { name: 'Email' });
    await act(() => {
      userEvent.type(emailInput, 'test@gmail.com');
    });

    expect(emailInput).toHaveValue('test@gmail.com');
  });
  it('should insert text into request input', async () => {
    render(<EmailSubmissionForm submitRequest={submitRequest} />);
    const requestInput = await screen.findByRole('textbox', { name: 'Requested Data' });
    await act(() => {
      userEvent.type(requestInput, 'Test Request');
    });

    expect(requestInput).toHaveValue('Test Request');
  });
});

describe('Form should submit when correct values entered and submit button hit', () => {
  it('should call submit request when form submitted', async () => {
    const submitRequest = jest.fn();
    const { findByRole } = render(<EmailSubmissionForm submitRequest={submitRequest} />);
    const nameInput = await findByRole('textbox', { name: 'Name' });
    const emailInput = await findByRole('textbox', { name: 'Email' });
    const requestInput = await findByRole('textbox', { name: 'Requested Data' });
    const submitButton = await findByRole('button', { name: 'Submit' });
    await act(() => {
      userEvent.type(nameInput, 'Test Name');
      userEvent.type(emailInput, 'test@gmail.com');
      userEvent.type(requestInput, 'Test Request');
    });
    await act(() => {
      userEvent.click(submitButton);
    });

    expect(submitRequest).toHaveBeenCalled();
  });
});
