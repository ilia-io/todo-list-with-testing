import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('Form component tests', () => {
  test('renders form', () => {
    render(<Form />);
    const form = screen.getByTestId('form');
    expect(form).toBeInTheDocument();
    expect(form).toMatchSnapshot();
  });
  test('renders input', () => {
    render(<Form />);
    const input = screen.getByPlaceholderText(/Что будем делать?/i);
    expect(input).toBeInTheDocument();
  });
  test('button function', () => {
    let testText = '';
    render(
      <Form
        addTodo={(text) => {
          testText = text;
        }}
      />
    );
    const input = screen.getByPlaceholderText(/Что будем делать?/i);
    const btn = screen.getByRole('button');
    userEvent.type(input, 'write tests');
    fireEvent.click(btn);
    expect(testText).toBe('write tests');
  });
});
