import React, { useState } from 'react';
import { ITodo } from './Todo';

interface IFormProps {
  todos: ITodo[];
  setTodos: (todos: ITodo[] | ((prevVar: ITodo[]) => ITodo[])) => void;
}

const getId = () => new Date().valueOf();

const Form: React.FC<IFormProps> = ({ todos, setTodos }) => {
  const [addInput, setAddInput] = useState('');

  const AddTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodos([...todos, { id: getId(), title: addInput, isCompleted: false }]);
    setAddInput('');
  };

  return (
    <form
      onSubmit={(event) => {
        AddTodo(event);
      }}
    >
      <input
        onChange={(event) => setAddInput(event.target.value)}
        value={addInput}
        className="input-todo"
        type="text"
        placeholder="Что будем делать?"
      />
      <button type="submit">add</button>
    </form>
  );
};

export default Form;
