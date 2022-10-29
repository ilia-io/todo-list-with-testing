import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';

const initialTodos = [
  {
    id: 1,
    title: 'Тестовое задание',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Прекрасный код',
    isCompleted: false,
  },

  {
    id: 3,
    title: 'Покрытие тестами',
    isCompleted: false,
  },
  {
    id: 4,
    title:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, nobis!',
    isCompleted: false,
  },
];

export const getId = () => new Date().valueOf();

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [addInput, setAddInput] = useState('');
const [todosActive, setTodosActive] = useState(todos)
const [todosCompleted, setTodosCompleted] = useState(todos)
const [allBtnActive, setAllBtnActive] = useState(true)
const [activeBtnActive, setActiveBtnActive] = useState(false);
const [completedBtnActive, setCompletedBtnActive] = useState(false);

  const AddTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodos([...todos, { id: getId(), title: addInput, isCompleted: false }]);
    setAddInput('');
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const setBtnActive = () => {

  }

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
          <button className={allBtnActive ? 'active' : ''} type="button">
            Все
          </button>
          <button className={activeBtnActive ? 'active' : ''} type="button">
            Активные
          </button>
          <button className={completedBtnActive ? 'active' : ''} type="button">
            Выполненные
          </button>
          <button type="button">Очистить выполненные</button>
        </div>
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
        <ul>
          {todos.map((todo) => (
            <Todo
              key={todo.title}
              id={todo.id}
              title={todo.title}
              isCompleted={todo.isCompleted}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
