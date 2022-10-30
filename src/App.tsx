import React, { useEffect, useState } from 'react';
import './App.css';
import Categories from './components/Categories';
import Form from './components/Form';
import Todo from './components/Todo';

const initialTodos = [
  {
    id: 1,
    title: 'Тестовое задание',
    isCompleted: true,
  },
  {
    id: 2,
    title: 'Прекрасный код',
    isCompleted: true,
  },

  {
    id: 3,
    title: 'Покрытие тестами',
    isCompleted: true,
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit, amet co',
    isCompleted: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [categoryState, setCategoryState] = useState(0);

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateCheckStatus = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const taskLeft = () => {
    let count = 0;
    todos.forEach((todo) => {
      count += todo.isCompleted ? 0 : 1;
    });
    return count;
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => todo.isCompleted === false));
  };

  const todosMap = todos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      title={todo.title}
      isCompleted={todo.isCompleted}
      deleteTodo={deleteTodo}
      updateCheckStatus={updateCheckStatus}
    />
  ));
  const activeTodosMap = todos
    .filter((todo) => todo.isCompleted === false)
    .map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        title={todo.title}
        isCompleted={todo.isCompleted}
        deleteTodo={deleteTodo}
        updateCheckStatus={updateCheckStatus}
      />
    ));
  const completedTodosMap = todos
    .filter((todo) => todo.isCompleted === true)
    .map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        title={todo.title}
        isCompleted={todo.isCompleted}
        deleteTodo={deleteTodo}
        updateCheckStatus={updateCheckStatus}
      />
    ));

  return (
    <div className="App">
      <div className="todos">
        <header className="App-header">
          <h1>
            to<i>do</i>s
          </h1>
        </header>
        <Categories
          categoryState={categoryState}
          setCategoryState={setCategoryState}
          taskLeft={taskLeft}
          clearCompleted={clearCompleted}
        />
        <Form setTodos={setTodos} todos={todos} />
        <ul>
          {categoryState === 0
            ? todosMap
            : categoryState === 1
            ? activeTodosMap
            : completedTodosMap}
        </ul>
      </div>
    </div>
  );
}

export default App;
