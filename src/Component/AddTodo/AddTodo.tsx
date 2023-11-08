import React, {FC} from "react"
import "../todo.scss"

type AddTodoProps = {
   addTodo: (event:React.FormEvent<HTMLFormElement>) => void,
   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
   value: string
}

const AddTodo:FC<AddTodoProps> = ({addTodo, onChange, value}) => {

   
   return(
      <form onSubmit={addTodo} className="addTodo">
         <input type="text" placeholder="Add Todo" 
            value={value}
            onChange={onChange}
            />
         <button>Add</button>
      </form>
   )
}

export default AddTodo