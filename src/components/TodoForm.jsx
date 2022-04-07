import React,{useState,useContext} from 'react'
import {TodosContext} from "../context/TodosContext";
import filterData from '../filter';

function TodoForm() {
  const [todo,setTodo] = useState('');
  const [date,setDate] = useState();
  const [todos, setTodos, modalState,setModalState,modalMessage,setModalMessage,todosFiltered,setTodosFiltered] = useContext(TodosContext);

  // handlers
  const handleTodo = (e)=>{
    e.preventDefault();
    const todoItem = {
      id : Math.random(),
      todo : todo,
      state : false,
      created_at : new Date(date).toDateString(),
    }
    const todosLatest = [...todos,todoItem];
    setTodos(todosLatest);
    setModalState(true);
    const temp = todoItem.created_at.split(' ');
    const stringVal = `${temp[1]}-${temp[3]}`;
    console.log(stringVal);
    setTodosFiltered(filterData(stringVal,todos));
    setModalMessage('Successfully added!');
    setTodo('');
    setDate('');
  }

  return (
    <form className='todo-form' onSubmit={(e)=>handleTodo(e)}>
      <label htmlFor="todo">Add a todo</label>
      <input type="text" name="todo" id="todo" value={todo} placeholder='add a todo...' onChange={e=>setTodo(e.target.value)}/>
      <label htmlFor="date">Add a deadline</label>
      <input type="date" name="date" id="date" value={date} onChange={e=>setDate(e.target.value)} />
      <input type="submit" value="Add todo" />
    </form>
  )
}

export default TodoForm