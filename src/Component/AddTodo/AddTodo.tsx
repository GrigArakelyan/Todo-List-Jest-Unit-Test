import React, {FC, useState} from "react"
import "../todo.scss"
import { TodoType } from "../../todos"

type AddTodoProps = {
   todos: TodoType[];
   setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
 
}

const AddTodo:FC<AddTodoProps> = ({  setTodos, todos}) => {
   const [value, setValue] = useState("");

   const addTodo:(event:React.FormEvent<HTMLFormElement>) => void = (event) => {
      event.preventDefault()
      if(value){
         setTodos([...todos, {
            id: Math.random(),
            title: value,
            completed: false
         }]);
      }
      setValue("");
   }

   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
   }

   
   return(
      <form data-testid="data-testid" onSubmit={addTodo} className="addTodo">
         <input type="text" placeholder="Add Todo" 
            value={value}
            onChange={onChange}
            />
         <button>Add</button>
      </form>
   )
}

export default AddTodo