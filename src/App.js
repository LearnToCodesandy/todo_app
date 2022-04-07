import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Modal from "./components/Modal";
import Sidebar from './components/Sidebar';

// this project is very much fun!
function App() {
  return (
      <div className="container">
        <Modal/>
        <Sidebar/>
        <header>
          <TodoForm/>
        </header>
        <main>
          <TodoList />
        </main>
      </div>
  )
}

export default App