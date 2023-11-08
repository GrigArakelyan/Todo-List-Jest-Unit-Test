import {render, screen} from "@testing-library/react"
import Todos from "./Todos"

describe("Todos Test", () => {
   test("Todos Render", () => {
      render(<Todos />);
      expect(screen.getByText(/html/i)).toBeInTheDocument();
   });
})