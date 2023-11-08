import React, { FC, useState } from "react";
import "../todo.scss"
import { TodoType } from "../../todos";

type TodoProps = { 
   todo: TodoType,
   removeTodo: (id: number) => void,
   setCompleted: React.Dispatch<React.SetStateAction<TodoType[]>>,
   completedTodos: TodoType[]
}

const Todo:FC<TodoProps> = ({todo, removeTodo, setCompleted, completedTodos}) => {

   const {id, title, completed} = todo;
   const [checked, setChecked] = useState(completed);


   const handleChecked = () => {
      setChecked(todo.completed = !checked);
      setCompleted([...completedTodos, {...todo}])
   }
   

   return(
      <div className="todo">
         <input className="input" type="checkbox" name="completed" 
            checked={checked} onChange={handleChecked}
         />
         <p>{title}</p>
         <button onClick={() => removeTodo(id)}>Remove</button>
      </div>
   )
}

export default Todo