import {render, screen} from "@testing-library/react"
import TodoFooter from "./TodoFooter"
import { TodoType, todosData } from "../../todos"
import userEvent from "@testing-library/user-event";

const removeCompleted = jest.fn();
const todos:TodoType[] = todosData;
const completed = todos.filter(todo => todo.completed)
const setTodos = jest.fn();

describe("Todo Footer Component", () => {
   test("Todo Footer render", () => {
      render(<TodoFooter setTodos={setTodos} todos={todos}/>)
      expect(screen.getByText(/remove completed/i)).toBeInTheDocument()
   });
   test("todos length", () => {
      render(<TodoFooter setTodos={setTodos} todos={todos}/>)
      expect(screen.getByText(`${completed.length}/${todos.length}`)).toBeInTheDocument()
   });
   test("RemoveCompleted fn test", () => {
      render(<TodoFooter setTodos={setTodos} todos={todos} />)
      userEvent.click(screen.getByRole("button"));
   })
})