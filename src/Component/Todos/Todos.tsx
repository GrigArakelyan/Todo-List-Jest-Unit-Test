import "../todo.scss"
import Todo from "../Todo/Todo"
import AddTodo from "../AddTodo/AddTodo"
import { todosData } from "../../todos"
import React,{ FC, useState } from "react"
import TodoFooter from "../TodoFooter/TodoFooter"



const Todos:FC = () => {

   const [todos, setTodos] = useState(todosData);
   const [completed, setCompleted] = useState(todos.filter(todo => todo.completed))
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

   const removeTodo = (id: number) => {
      setTodos(todos.filter(todo => {
         return id != todo.id
      }))
   }
   
   const removeCompleted = () => {
      setTodos(todos.filter(todo => todo.completed === false))
      setCompleted([])
   }

   return (
      <div className="todos">
         <AddTodo addTodo={addTodo} onChange={onChange} value={value} />
         {todos.map(todo => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} setCompleted={setCompleted} completedTodos={completed}/>
         ))}
         <TodoFooter removeCompleted={removeCompleted} todos={todos} completed={completed}/>
      </div>
   )
}

export default Todos