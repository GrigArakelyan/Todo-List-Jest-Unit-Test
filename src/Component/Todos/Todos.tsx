import "../todo.scss"
import Todo from "../Todo/Todo"
import AddTodo from "../AddTodo/AddTodo"
import { todosData } from "../../todos"
import React,{ FC, useState } from "react"
import TodoFooter from "../TodoFooter/TodoFooter"



const Todos:FC = () => {

   const [todos, setTodos] = useState(todosData);
   

   return (
      <div className="todos">
         <AddTodo setTodos={setTodos} todos={todos} />
         {todos.map(todo => (
            <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
         ))}
         <TodoFooter setTodos={setTodos} todos={todos} />
      </div>
   )
}

export default Todos