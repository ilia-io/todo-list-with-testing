import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { isExportDeclaration } from 'typescript';

describe('APP TEST', () => {
  test('renders learn react link', () => {
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
});

