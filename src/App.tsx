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

export const getId = () => new Date().valueOf();

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [categoryState, setCategoryState] = useState(0);
  const [taskLeft, setTaskLeft] = useState(0);

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

  const taskLeftFun = () => {
    let count = 0;
    todos.forEach((todo) => {
      count += todo.isCompleted ? 0 : 1;
    });
    setTaskLeft(count);
  };

  useEffect(() => {
    taskLeftFun();
  }, [todos]);

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => todo.isCompleted === false));
  };

  const addTodo = (todoText: string) => {
    setTodos([...todos, { id: getId(), title: todoText, isCompleted: false }]);
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
          <h1>todos</h1>
        </header>
        <Categories
          categoryState={categoryState}
          setCategoryState={setCategoryState}
          taskLeft={taskLeft}
          clearCompleted={clearCompleted}
        />
        <Form addTodo={addTodo} />
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
