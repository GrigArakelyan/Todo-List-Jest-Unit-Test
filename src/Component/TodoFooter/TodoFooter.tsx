import React, { FC } from "react"
import { TodoType } from "../../todos"
import "../todo.scss"

type TodoFoterProps = {
   setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>,
   todos: TodoType[],
}

const TodoFooter:FC<TodoFoterProps> = ({setTodos, todos}) => {

   const removeCompleted = () => {
      setTodos(todos.filter(todo => todo.completed === false))
   }
   
   const completedTodo = todos.filter(todo => todo.completed)
  

   return (
      <div className="todoFooter">
         <div className="text">{`${completedTodo.length}/${todos.length}`}</div>
         <button onClick={removeCompleted}>Remove completed</button>
      </div>
   )
}

export default TodoFooter