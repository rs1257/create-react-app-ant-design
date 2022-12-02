import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EmailSubmissionForm from '../EmailSubmissionForm';

describe('should have empty fields by default', () => {
  const submitRequest = jest.fn();
  it('Should have empty name input by default', () => {
    render(<EmailSubmissionForm submitRequest={submitRequest} />);
    const nameInput = screen.getByRole('textbox', { name: 'Name' });
    expect(nameInput).toHaveTextContent('');
  });
  it('Should have empty email input by default', () => {
    render(<EmailSubmissionForm submitRequest={submitRequest} />);
    const emailInput = screen.getByRole('textbox', { name: 'Email' });
    expect(emailInput).toHaveTextContent('');
  });
  it('Should have empty name input by default', () => {
    render(<EmailSubmissionForm submitRequest={submitRequest} />);
    const requestInput = screen.getByRole('textbox', { name: 'Requested Data' });
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
