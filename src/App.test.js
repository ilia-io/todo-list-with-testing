import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { isExportDeclaration } from 'typescript';
import userEvent from '@testing-library/user-event';

describe('App test', () => {
  test('renders app', () => {
    render(<App />);
    const todosElem = screen.getByText(/todos/i);
    const header = screen.getByRole('heading');
    const ul = screen.getByRole('list');
    expect(todosElem).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(ul).toBeInTheDocument();
  });

  test('random test', () => {
    render(<App />);
    const hello = screen.queryByText(/hello/i);
    expect(hello).toBeNull();
  });

  test('renders initial list items', () => {
    render(<App />);
    const listItems = screen.queryAllByTestId('list-item');
    expect(listItems).toHaveLength(4);
  });

  test('delete task in the list', () => {
    render(<App />);
    expect(screen.queryAllByTestId('list-item')).toHaveLength(4);
    const btn = screen.queryAllByTestId('list-btn');
    screen.debug();
    fireEvent.click(btn[3]);
    screen.debug();
    expect(screen.queryAllByTestId('list-item')).toHaveLength(3);
  });
  test('render only active tasks button', () => {
    render(<App />);
    expect(screen.queryAllByTestId('list-item')).toHaveLength(4);
    const btn = screen.queryAllByTestId('categ-btn');
    screen.debug();
    fireEvent.click(btn[1]);
    screen.debug();
    expect(screen.queryAllByTestId('list-item')).toHaveLength(1);
  });
  test('add task to the list', () => {
    render(<App />);
    expect(screen.queryAllByTestId('list-item')).toHaveLength(4);
    const btn = screen.getByTestId('add-btn');
    const input = screen.getByPlaceholderText(/Что будем делать?/i);
    userEvent.type(input, 'write tests');
    fireEvent.click(btn);
    expect(screen.queryAllByTestId('list-item')).toHaveLength(5);
  });
});
