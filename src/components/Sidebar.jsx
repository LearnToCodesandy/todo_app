import React, { useState,useContext } from 'react'
import TodoItem from './TodoItem';
import { TodosContext } from '../context/TodosContext';

function Sidebar() {
  const [todos, setTodos, modalState,setModalState,modalMessage,setModalMessage,todosFiltered,setTodosFiltered,sidebar,setSidebar] = useContext(TodosContext);

  return (
    <div className={sidebar ? "sidebar-container" : "display-hide"}>
        <button className="toggle-btn" onClick={_=>setSidebar(false)} >Close Sidebar</button>
        {
            todos.length === 0 ? <p>No todos yet!!</p> : <p>{todos.length} left!!!</p>
        }
        <div className="sidebar-container-list">
        {
          todos.map((todo,index)=>
          <TodoItem todo={todo} index={index} key={index}/>
          )
        }
        </div>
    </div>
  )
}

export default Sidebar