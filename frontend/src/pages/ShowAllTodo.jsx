import { useSelector } from "react-redux"


const ShowAllTodo = () =>{
    const allTodos = useSelector(state => state.todo.data)
  console.log(allTodos)

  return(
    <h1>deom</h1>
  )
}

