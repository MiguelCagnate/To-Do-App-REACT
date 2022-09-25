import React, { Fragment, useState, useRef } from "react";
import { v4 as uuidV4 } from "uuid";
import { TodoList } from "./components/TodoList";


export function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Tarea One", completed: false },
  ]);
const todoTaskRef = useRef()
const addNewTodo = () =>{
const task = todoTaskRef.current.value
if (task === '')return;  
setTodos((prevTodos) => {
    return [...prevTodos, {id:uuidV4(), task, completed:false}]
})

}

  return (
    <Fragment>
      <TodoList todos={todos} />
      <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea"></input>
      <button onClick={addNewTodo}>➕</button>
      <button>🗑</button>
    </Fragment>
  );
}
