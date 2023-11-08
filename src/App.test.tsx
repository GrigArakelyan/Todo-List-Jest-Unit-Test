import {render, screen} from "@testing-library/react"
import App from "./App"

describe("App component", () => {
   test("App render", () => {
      render(<App />)
      expect(screen.getByText(/todo list/i)).toBeInTheDocument()
   })
})