import React from 'react';

const categories = ['Все', 'Активные', 'Выполненные'];

interface ICategoryProps {
  categoryState: number;
  setCategoryState: (id: number) => void;
}

const Categories: React.FC<ICategoryProps> = ({
  categoryState,
  setCategoryState,
}) => {
  return (
    <div className="actions">
      <p>Осталось сделать: 2</p>
      {categories.map((cat, index) => (
        <button
          onClick={() => setCategoryState(index)}
          className={categoryState === index ? 'active' : ''}
          type="button"
          key={index}
        >
          {cat}
        </button>
      ))}
      <button type="button">Очистить выполненные</button>
    </div>
  );
};

export default Categories;
