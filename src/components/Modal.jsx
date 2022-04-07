import React, { useContext, useEffect } from 'react'
import { TodosContext } from '../context/TodosContext'

function Modal() {

  const [todos, setTodos, modalState,setModalState,modalMessage,setModalMessage] = useContext(TodosContext);

// handlers
const toggleModal = ()=>{
  setModalState(false);
}

  return (
    <div className={modalState ? "modal" : "display-hide"}> 
      <div className="close-modal"><span onClick={toggleModal}>&#10006;</span></div>
      <div className="modal-body">
        <div className="message-box">{modalMessage}</div>
        <div className="progress-box progress-box-success"></div>
      </div>
    </div>
  )
}

export default Modal