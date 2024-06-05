import { useState } from "react";
import Card from "../../UI/Card";
import Button from "../../UI/button";
import axios from "axios";

const TodoList = ({ todos, settodos }) => {
  if (todos.length < 1) {
    return null;
  }

  const DeleteBtnHandler = async (id) => {
    console.log("Deleting todo with ID:", id);
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      settodos(todos.filter((item) => item._id !== id));
      console.log("Todo deleted:", id);
    } catch (error) {
      console.error("There was an error deleting the todo:", error);
    }
  };

  const completedfunc = async (id) => {
    console.log("Completing todo with ID:", id);
    const todoToUpdate = todos.find((item) => item._id === id);
    if (!todoToUpdate) {
      console.error("Todo to update not found.");
      return;
    }
    console.log("Todo to update:", todoToUpdate);
    const updatedTodo = { ...todoToUpdate, checked: !todoToUpdate.checked };
    try {
      const response = await axios.put(`http://localhost:5000/api/todos/${id}`, updatedTodo);
      settodos(todos.map((item) => (item._id === id ? response.data : item)));
    } catch (error) {
      console.error("There was an error updating the todo:", error);
    }
  };

  return (
    <Card className="mt-16">
      <ul className="flex flex-col justify-center gap-3 ">
        <li className="flex justify-start">
          <strong>Eylemler</strong>
        </li>
        {todos.map((todo) => (
          <li className="flex justify-between" key={todo._id}>
            {!todo.checked ? (
              <span>{todo.todoes}</span>
            ) : (
              <s className="opacity-70">{todo.todoes}</s>
            )}
            <div className="flex gap-1">
              <Button className="bg-green-700" onClick={() => completedfunc(todo._id)}>
                <i className="fa-solid fa-check"></i>
              </Button>
              <Button className="bg-red-600" onClick={() => DeleteBtnHandler(todo._id)}>
                <i className="fa-solid fa-trash"></i>
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TodoList;
