import React, { useContext } from 'react'
import { TodosContext } from '../context/TodosContext'
import filterData from "../filter";

function TodoItem({todo,index}) {
  const [todos, setTodos, modalState,setModalState,modalMessage,setModalMessage,todosFiltered,setTodosFiltered] = useContext(TodosContext);


  // handlers
  const handleDeleteTodo = (id)=>{
    const filteredTodos = todos.filter((todo,ind)=>{
      if (ind !== id) return todo;
    })
    setTodos(filteredTodos);
    const temp = todo.created_at.split(' ');
    const string = `${temp[1]}-${temp[3]}`;
    setTodosFiltered(filterData(string,filteredTodos));
    setModalState(true);
    setModalMessage('Deleted Successfully!');
  }

  const handleTodoState = (id)=>{
    const filteredStateTodos = todos.filter((todo,index)=> {
      if(index === id){
        todo.state = !todo.state;
        return todo;
      }else{
        return todo;
      }
    })
    setTodos(filteredStateTodos);
  }


  return (
    <li key={todo.id}>
          <div className="left">  
            <span className={todo.state ? "text strike-through" : "text"} onDoubleClick={()=>handleTodoState(index)}>{todo.todo}</span>
            <span className="deadline">{todo.created_at}</span>
          </div>
          <div className="right">
            <span className="close" onClick={()=>handleDeleteTodo(index)}>&#10006;</span>
          </div>
    </li>
  )
}

export default TodoItem