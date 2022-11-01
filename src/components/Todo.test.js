import { fireEvent, render, screen } from '@testing-library/react';
import Todo from './Todo';

describe('Todo component tests', () => {
  const data = { title: 'func', isCompleted: true };

  it('List renders', () => {
    render(<Todo title={data.title} />);
    const li = screen.getByRole('listitem');
    const input = screen.getByRole('checkbox');
    const title = screen.getByText('func');
    expect(li).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(li).toMatchSnapshot();
  });

  it('Props text line-t', () => {
    render(<Todo isCompleted={true} title={'test'} />);
    expect(screen.getByTestId('toggle-text')).toHaveStyle({
      textDecorationLine: 'line-through',
    });
  });
  it('Props text line-none', () => {
    render(<Todo isCompleted={false} title={'test'} />);
    expect(screen.getByTestId('toggle-text')).not.toHaveAttribute('style');
  });
  it('delete button function', () => {
    let testId = 0;
    render(<Todo id={22} deleteTodo={(id) => (testId = id)} />);
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(testId).toBe(22);
  });
});
