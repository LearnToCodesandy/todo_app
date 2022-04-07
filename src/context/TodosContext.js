import React, { useState, createContext } from 'react';

export const TodosContext = createContext();

export const TodosProvider = (props) => {
    const [todos, setTodos] = useState([
        {
            _id : Math.random(),
            todo : 'this is a sample todo 1',
            state: false,
            created_at : new Date().toDateString()
        },
        {
            _id : Math.random(),
            todo : 'this is a sample todo 2',
            state: false,
            created_at : new Date().toDateString()
        },
        {
            _id : Math.random(),
            todo : 'this is a sample todo 3',
            state: false,
            created_at : new Date().toDateString()
        },
        {
            _id : Math.random(),
            todo : 'this is a sample todo 4',
            state: false,
            created_at : new Date().toDateString()
        },
    ]);
    const [modalState,setModalState] = useState(false)
    const [modalMessage,setModalMessage] = useState('');
    const [todosFiltered,setTodosFiltered] = useState([]);
    const [sidebar,setSidebar] = useState(false);

    return (
        <TodosContext.Provider
            value={[todos, setTodos, modalState,setModalState,modalMessage,setModalMessage,todosFiltered,setTodosFiltered,sidebar,setSidebar]}
        >
            {props.children}
        </TodosContext.Provider>

    );
}