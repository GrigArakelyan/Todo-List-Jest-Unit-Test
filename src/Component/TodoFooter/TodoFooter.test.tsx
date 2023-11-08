import {render, screen} from "@testing-library/react"
import TodoFooter from "./TodoFooter"
import { TodoType, todosData } from "../../todos"
import userEvent from "@testing-library/user-event";

const removeCompleted = jest.fn();
const todos:TodoType[] = todosData;
const completed = todos.filter(todo => todo.completed)
const cmpletedTest = [todos[0], todos[1]];

describe("Todo Footer Component", () => {
   test("Todo Footer render", () => {
      render(<TodoFooter removeCompleted={removeCompleted} todos={todos} completed={completed} />)
      expect(screen.getByText(/remove completed/i)).toBeInTheDocument()
   });
   test("todos length", () => {
      render(<TodoFooter removeCompleted={removeCompleted} todos={todos} completed={completed} />)
      expect(screen.getByText(`${completed.length}/${todos.length}`)).toBeInTheDocument()
   });
   test("RemoveCompleted fn test", () => {
      render(<TodoFooter removeCompleted={removeCompleted} todos={todos} completed={cmpletedTest} />)
      userEvent.click(screen.getByRole("button"));
      // expect(screen.getByText(/html/i)).not.toBeInTheDocument();
      // expect(screen.getByText(/css/i)).not.toBeInTheDocument();
   })
})