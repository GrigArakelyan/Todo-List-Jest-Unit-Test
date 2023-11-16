import {render, screen} from "@testing-library/react"
import Todo from "./Todo"
import { todosData } from "../../todos"


const todo = todosData[0];
const handleChecked = jest.fn()

describe("Todo test", () => {
   test("Todo render", () => {
      render(<Todo todo={todo}/>)
      expect(screen.getByText(/html/i)).toBeInTheDocument();
   });
   test("Todo checkbox test", () => {
   })
});