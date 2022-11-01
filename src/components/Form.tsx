import React, { useState } from 'react';
import { ITodo } from './Todo';

interface IFormProps {
  // todos: ITodo[];
  // setTodos: (todos: ITodo[] | ((prevVar: ITodo[]) => ITodo[])) => void;
  addTodo: (addInput: string) => void
}


const Form: React.FC<IFormProps> = ({ addTodo }) => {
  const [addInput, setAddInput] = useState('');

  const onClickAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(addInput);
    setAddInput('');
  };

  return (
    <form
      data-testid="form"
      onSubmit={(event) => {
        onClickAdd(event);
      }}
    >
      <input
        onChange={(event) => setAddInput(event.target.value)}
        value={addInput}
        className="input-todo"
        type="text"
        placeholder="Что будем делать?"
      />
      <button type="submit">Добавить +</button>
    </form>
  );
};

export default Form;
