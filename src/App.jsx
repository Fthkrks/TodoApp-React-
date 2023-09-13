import { useEffect, useState } from 'react'
import './App.css'
import Addtodo from './components/todo/todoAdd/Addtodo'
import TodoList from './components/todo/todoList/TodoList'

function App() {
  const [todos, settodos] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

  useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos)); 

  }, [todos])
  return (
    <>
    <h1 className="text-white text-5xl font-bold flex justify-center">Todo App</h1>
    <Addtodo settodos = {settodos}/>
    <TodoList todos = {todos} settodos ={settodos}/>
    </>
  )
}

export default App
