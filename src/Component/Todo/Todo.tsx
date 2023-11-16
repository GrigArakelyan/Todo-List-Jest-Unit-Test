import React, { FC, useState } from "react";
import "../todo.scss"
import { TodoType, todosData } from "../../todos";

type TodoProps = { 
   todo: TodoType,
   todos: TodoType[];
   setTodos:React.Dispatch<React.SetStateAction<TodoType[]>>;
   // removeTodo: (id: number) => void,
   // handleChecked: (id:number) => void,
}

const Todo:FC<TodoProps> = ({todo, todos, setTodos}) => {

   const {id, title, completed} = todo;

   const removeTodo = (id: number) => {
      setTodos(todos.filter(todo => {
         return id != todo.id
      }))
   }
   
   const handleChecked = (id: number) => {
      setTodos(todos.map(todo => {
         if(todo.id === id){
            return {...todo, completed: !todo.completed}
         }
         return todo
      }))
   }

   

   return(
      <div className="todo">
         <input className="input" type="checkbox" name="completed" 
            checked={completed} onChange={() =>handleChecked(todo.id)}
         />
         <p>{title}</p>
         <button onClick={() => removeTodo(id)}>Remove</button>
      </div>
   )
}

export default Todo