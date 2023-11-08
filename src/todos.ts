export type TodoType = {
   id: number,
   title: string,
   completed: boolean,
}


export const todosData: TodoType[] = [
   {id: Math.random(), title: "Html", completed: false},
   {id: Math.random(), title: "Css", completed: false},
   {id: Math.random(), title: "Java Script", completed: false},
]