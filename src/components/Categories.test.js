import React from 'react';
import { render, screen } from '@testing-library/react';
import Categories from './Categories';

describe('Categories component tests', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    render(<Categories />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it('renders correctly initial document', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(4);
    expect(buttons).toMatchSnapshot();
  });
});

describe('Categories TEST', () => {

  it('Buttons renders', () => {
     render(<Categories />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(4);
    expect(buttons).toMatchSnapshot();
  });

  it('text renders', () => {
    render(<Categories />);
    const p = screen.getByTestId('text-test');
    expect(p).toBeInTheDocument();
  });
});
