import React, { FC, useState } from "react"
import { TodoType } from "../../todos"
import "../todo.scss"

type TodoFoterProps = {
   removeCompleted: () => void,
   todos: TodoType[],
   completed: TodoType[]
}

const TodoFooter:FC<TodoFoterProps> = ({removeCompleted, todos, completed}) => {
   
   // const completedTodo = todos.filter(todo => todo.completed)
  

   return (
      <div className="todoFooter">
         <div className="text">{`${completed.length}/${todos.length}`}</div>
         <button onClick={removeCompleted}>Remove completed</button>
      </div>
   )
}

export default TodoFooter