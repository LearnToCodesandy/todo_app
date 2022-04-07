import React, { useContext, useState,useEffect } from 'react'
import { TodosContext } from '../context/TodosContext'
import TodoItem from './TodoItem';
import filterData from "../filter.js";

function TodoList() {
  const [todos, setTodos, modalState,setModalState,modalMessage,setModalMessage,todosFiltered,setTodosFiltered,sidebar,setSidebar] = useContext(TodosContext);

  
  // effects
  useEffect(()=>{
    const str = new Date().toDateString().split(' ');
    const initalString =  `${str[1]}-${str[3]}`;
    setTodosFiltered(filterData(initalString,todos));
  },[])

  // handlers
  const setFilteredTodos = (value)=>{
    const temp = new Date(value).toDateString().split(' ');
    const month = temp[1];
    const year = temp[3];
    const string = `${month}-${year}`;
    setTodosFiltered(filterData(string,todos));
  }
  
  return (
    <div className="todo-list">
      <h2>Filter Todos </h2>
      <br/>
      <div className="todos-filter">
        <input type="month" name="filter" id="filter" onChange={(e)=>setFilteredTodos(e.target.value)}/>
        <input type="submit" value="View All" className={todos.length !== 0 ? "viewAllBtn" : "display-hide"} onClick={_=>setSidebar(true)} />
        <span className={todos.length !== 0 ? "badge" : "display-hide"}>{todos.length}</span>
      </div>
      {
        todosFiltered.length ? <span className="todos-left">{todosFiltered.length} left in box!!!</span> : <span className="todos0left">No todos yet!</span>
      }
      
      <div className="todos-wrapper">
        {
          todosFiltered.map((todo,index)=>
          <TodoItem todo={todo} index={index} key={index}/>
          )
        }
      </div>
    </div>
  )
}

export default TodoList