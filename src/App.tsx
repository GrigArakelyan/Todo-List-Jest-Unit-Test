import React, { FC } from 'react';
import Todos from './Component/Todos/Todos';
import "./index.scss"


const App:FC = () => {

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Todos />
    </div>
  )
}

export default App