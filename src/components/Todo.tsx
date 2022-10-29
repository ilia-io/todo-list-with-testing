import React, { useState } from 'react';

interface ITodoProps {
  title: string;
  isCompleted: boolean;
}

const Todo: React.FC<ITodoProps> = ({ title, isCompleted }) => {
const [completed, setCompleted] = useState(isCompleted)

  return (
    <li>
      <input
        onChange={(event) => setCompleted(event.target.checked)}
        checked={completed}
        type="checkbox"
      />
      <span>{title}</span>
      <button type="button">x</button>
    </li>
  );
};

export default Todo;
