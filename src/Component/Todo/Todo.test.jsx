import {render, screen} from "@testing-library/react"
import Todo from "./Todo"
import { todosData } from "../../todos"


const todo = todosData[0];
const setTodo = jest.fn()

describe("Todo test", () => {
   test("Todo render", () => {
      render(<Todo todo={todo} setTodos={setTodo} todos={todosData}/>)
      expect(screen.getByText(/html/i)).toBeInTheDocument();
   });
   test("Todo checkbox test", () => {
   })
});