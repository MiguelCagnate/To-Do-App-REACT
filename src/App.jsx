import React, {Fragment, useState} from "react";
import {TodoList} from './components/TodoList'


export function App(){
    const [todos, setTodo] = useState([ {id: 1, task: 'Tarea One', completed: false }])
    return (
    <Fragment>
 <TodoList todos ={todos} />
 <input type='text' placeholder="Nueva Tarea"></input>
 <button>➕</button>
 <button>🗑</button>
    </Fragment>
    ); 
}