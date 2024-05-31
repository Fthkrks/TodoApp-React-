import { useState } from "react";
import Card from "../../UI/Card";
import Button from "../../UI/button";
import ErrorModal from "../../UI/ErrorModal";
import axios from "axios";

const Addtodo = ({ settodos }) => {
  const [todo, settodo] = useState("");
  const [error, seterror] = useState(false);

  const handleChange = (e) => {
    settodo(e.target.value);
  };


  const addTodoHandler = async (e) => {
    e.preventDefault();

    try {
      const todoData = {
        todoes: todo,
      };

      const response = await axios.post(
        "http://localhost:5000/api/todos/todo",
        todoData
      );
      console.log(response.data); // Başarılı yanıtı konsola yazdırın veya başka bir şekilde işleyin
    } catch (error) {
      console.error(error); // Hataları konsola yazdırın veya başka bir şekilde işleyin
    }
  };

  return (
    <Card className="mt-16">
      {error && <ErrorModal seterror={seterror} />}
      <form className="flex flex-col gap-y-2" onSubmit={addTodoHandler}>
        <label className="font-medium" htmlFor="name">
          {" "}
          Eylem İsmi:{" "}
        </label>
        <input
          className="border"
          type="text"
          id="name"
          placeholder="Eylemi giriniz...."
          onChange={(e) => settodo(e.target.value)}
          value={todo}
        />
        <Button className="bg-rose-700 " type="submit">
          Kaydet
        </Button>
      </form>
    </Card>
  );
};

export default Addtodo;
