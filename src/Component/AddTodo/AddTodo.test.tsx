import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import AddTodo from "./AddTodo"


const value:string = "React";
const onChange = jest.fn();
const addTodo = jest.fn();


describe("AddTodo component", () => {
   test("AddTodo render", () => {
      render(<AddTodo addTodo={addTodo} onChange={onChange} value={value} />);
      expect(screen.getByText(/add/i)).toBeInTheDocument();
   });
   test("AddTodo placeholder test", () => {
      render(<AddTodo addTodo={addTodo} onChange={onChange} value={value}/>);
      expect(screen.getByPlaceholderText(/add todo/i)).toBeInTheDocument();
   })
   test('AddTodo input change', () => {
      render(<AddTodo addTodo={addTodo} onChange={onChange} value={value}/>);
      userEvent.type(screen.getByRole('textbox'), value)
      expect(onChange).toHaveBeenCalledTimes(5);
   })
   test("AddTodo addTodo fn test", () => {
      render(<AddTodo addTodo={addTodo} onChange={onChange} value={value}/>);
      userEvent.click(screen.getByRole("button"))
      expect(addTodo).toHaveBeenCalledTimes(1)
   });
   test("AddTodo addTodo fn test", () => {
      render(<AddTodo addTodo={addTodo} onChange={onChange} value={value}/>);
      userEvent.click(screen.getByRole("button"))
      // expect(screen.getByText("React")).toBeInTheDocument()
      // expect(addTodo).toHave(value);
      // expect(screen.getByText(/react/i)).toBeInTheDocument()
   });
});