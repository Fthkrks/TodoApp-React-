import { useState } from "react";
import Card from "../../UI/Card"
import Button from "../../UI/button"



const TodoList = ({todos, settodos}) => {


  if(todos.length < 1){
    return;
  }


  const DeleteBtnHandler = (id) =>{

    try {
      
    } catch (error) {
      
    }

    settodos(todos.filter((item) => item.id !==id))
  }


  const completedfunc = (id) =>{
    settodos(todos.map((item) =>item.id === id ? { ...item, completed: !item.completed } : item))
  }



  return (
    <Card className="mt-16">
        <ul className="flex flex-col justify-center gap-3 ">
            <li className="flex justify-start">
                <strong>Eylemler</strong>
            </li>
            {todos.map((todo) =>(
                        <li className="flex justify-between" key={todo.id} > 
                          { !todo.checked? <span>{todo.todoes}</span> : <s className="opacity-70">{todo.todoes}</s> }
                          <div className="flex gap-1" >
                            <Button className="bg-green-700" onClick ={() =>completedfunc(todo.id)}><i className="fa-solid fa-check"></i></Button>
                            <Button className="bg-red-600 " onClick ={() =>DeleteBtnHandler(todo._id)} ><i className="fa-solid fa-trash"></i></Button>
                          </div>
                        
                        </li>
            ))}

        </ul>
    </Card>
  )
}

export default TodoList