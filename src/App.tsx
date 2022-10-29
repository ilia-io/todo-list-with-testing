import React from 'react';
import './App.css';
import Todo from './components/Todo';

const todos = [
  {
    title: 'Тестовое задание',
    isCompleted: false,
  },
  {
    title: 'Прекрасный код',
    isCompleted: false,
  },

  {
    title: 'Покрытие тестами',
    isCompleted: false,
  },
  {
    title:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, nobis!',
    isCompleted: false,
  },
];

const AddTodo = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
};

function App() {
  return (
    <div className="App">
      <div className="todos">
        <header className="App-header">
          <h1>
            to<i>do</i>s
          </h1>
        </header>
        <div className="actions">
          <p>Осталось сделать: 2</p>
          <button type="button">Все</button>
          <button type="button">Активные</button>
          <button type="button">Выполненные</button>
          <button type="button">Очистить выполненные</button>
        </div>
        <form
          onSubmit={(event) => {
            AddTodo(event);
          }}
        >
          <input
            className="input-todo"
            type="text"
            placeholder="Что будем делать?"
          />
          <button type="submit">add</button>
        </form>
        <ul>
          {todos.map((todo) => (
            <Todo
              key={todo.title}
              title={todo.title}
              isCompleted={todo.isCompleted}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
