import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import AddTodo from "./AddTodo"
import { todosData } from "../../todos";


const value:string = "React";
const onChange = jest.fn();
const setTodos = jest.fn();


describe("AddTodo component", () => {
   test("AddTodo render", () => {
      render(<AddTodo setTodos={setTodos} todos={todosData}/>);
      expect(screen.getByText(/add/i)).toBeInTheDocument();
   });
   test("AddTodo placeholder test", () => {
      render(<AddTodo setTodos={setTodos} todos={todosData}/>);
      expect(screen.getByPlaceholderText(/add todo/i)).toBeInTheDocument();
   });
});