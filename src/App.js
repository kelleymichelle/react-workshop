import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoTable from './components/TodoTable'


function App() {
  const [todos, setTodos] = useState([])

  const addNewTodo = task => {
    todos.length === 0 ? setTodos([task]) : setTodos([...todos, task])
  }

  const deleteTodo = task => {
    console.log(task)
    const updatedTodos = todos.filter(todo => todo !== task)
    setTodos(updatedTodos)

  }

  return (
    <div className="App">

      <div className="title">
        Todos
      </div>
      <TodoForm addNewTodo={addNewTodo}/>
      <TodoTable todosArray={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
