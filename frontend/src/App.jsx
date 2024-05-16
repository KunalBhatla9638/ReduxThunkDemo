import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from './redux/slice/TodoSlice'
import { fetchUsers } from './redux/slice/UserSlice';

function App() {

  const dispatch  = useDispatch();
  const allTodos = useSelector(state => state.todo)
  const allUsers = useSelector(state => state.user)
  // console.log('All Todos -->', allTodos)
  // console.log("All Users -->", allUsers)
  // console.table('All-Users -->', allUsers)
  // console.table(allTodos)
  
  
  
  if(allTodos.isLoading) <h1>Loading...</h1>;
  if(allUsers.isLoading) <h1>Loading...</h1>
  return (
    <>
      <button onClick={ () => dispatch(fetchTodos("kunal"))}>Fetch Todos</button>
      {
        allTodos.data && allTodos.data.map((item) =>{
          return <li key={item?.id}><b>{item.id} - </b>{item.title}</li>
        })
      }
      <button onClick={() => dispatch(fetchUsers())}>Fetch Users</button>
      {
        allUsers.data && allUsers.data.map((item) =>{
          
          return <li key={item?.id}><b>{item.id} - </b>{item.name}</li>
        })
      }
    
    </>
  )
}

export default App
