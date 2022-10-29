import React, { useState } from 'react';

interface ITodoProps {
  id: number;
  title: string;
  isCompleted: boolean;
  deleteTodo: (id: number) => void;
}

const Todo: React.FC<ITodoProps> = ({ id, title, isCompleted, deleteTodo }) => {
  const [completed, setCompleted] = useState(isCompleted);

  return (
    <li>
      <input
        onChange={(event) => setCompleted(event.target.checked)}
        checked={completed}
        type="checkbox"
      />
      <span>{title}</span>
      <button onClick={() => deleteTodo(id)} type="button">
        x
      </button>
    </li>
  );
};

export default Todo;
