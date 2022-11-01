import React from 'react';

const categories = ['Все', 'Активные', 'Выполненные'];

interface ICategoryProps {
  categoryState: number;
  setCategoryState: (id: number) => void;
  taskLeft: number;
  clearCompleted: () => void;
}

const Categories: React.FC<ICategoryProps> = ({
  categoryState,
  setCategoryState,
  taskLeft,
  clearCompleted,
}) => {
  return (
    <div className="actions">
      <p data-testid="text-test">{`Осталось сделать: ${taskLeft}`}</p>
      {categories.map((category, index) => (
        <button
          onClick={() => setCategoryState(index)}
          className={categoryState === index ? 'active' : ''}
          type="button"
          key={index}
        >
          {category}
        </button>
      ))}
      <button onClick={clearCompleted} type="button">
        Очистить выполненные
      </button>
    </div>
  );
};

export default Categories;
