import React, { useState } from 'react';

interface IFormProps {
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
      <button data-testid='add-btn' type="submit">Добавить +</button>
    </form>
  );
};

export default Form;
