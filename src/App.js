import {useState} from 'react'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import './App.css'

function App() {
  const [todos, setTodos] = useState(['fff', 'fff'])

  return (
    <div className='App'>
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList todos={todos} />
    </div>
  )
}

export default App