import React, { useState } from 'react';

export interface ITodo {
  id: number;
  title: string;
  isCompleted: boolean;
}

interface ITodoProps {
  id: number;
  title: string;
  isCompleted: boolean;
  deleteTodo: (id: number) => void;
  updateCheckStatus: (id: number) => void;
}
const Todo: React.FC<ITodoProps> = ({
  id,
  title,
  isCompleted,
  deleteTodo,
  updateCheckStatus,
}) => {
  const [completed, setCompleted] = useState(isCompleted);

  const onChangeStatus = () => {
    setCompleted(!completed);
    updateCheckStatus(id);
  };

  return (
    <li data-testid="list-item">
      <input
        data-testid="toggle-checkbox"
        onChange={onChangeStatus}
        checked={completed}
        type="checkbox"
      />
      <span
        data-testid="toggle-text"
        style={
          isCompleted
            ? {
                textDecorationLine: 'line-through',
                textDecorationThickness: '1px',
              }
            : {}
        }
      >
        {title}
      </span>
      <button
        data-testid="list-btn"
        onClick={() => deleteTodo(id)}
        type="button"
      >
        x
      </button>
    </li>
  );
};

export default Todo;
