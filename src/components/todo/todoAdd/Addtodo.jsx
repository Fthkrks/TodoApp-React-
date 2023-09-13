import { useState } from "react"
import Card from "../../UI/Card"
import Button from "../../UI/button"
import ErrorModal from "../../UI/ErrorModal";


const Addtodo = ({settodos}) => {
  const [todo, settodo] = useState("");
  const [error, seterror] = useState(false);

  const handleChange = (e) =>{
    settodo(e.target.value);
  }

  const addTodoHandler = (e) =>{
    e.preventDefault();


    if(todo.trim().length === 0){
      seterror(true);
      return;

    }


    settodos((prevstate) =>[
      ...prevstate,
      {
        id: Math.floor(Math.random() * 10000000),
        name: todo,
        completed: false,
      }

    ])
    settodo("");
    
  }



  return (

    <Card className="mt-16">
          {error && <ErrorModal seterror={seterror}/>}
      <form className="flex flex-col gap-y-2" onSubmit={addTodoHandler}>
      <label className="font-medium" htmlFor="name"> Eylem İsmi: </label>
      <input className="border" type="text" id="name" placeholder="Eylemi giriniz...." onChange={handleChange} value={todo} />
      <Button className="bg-rose-700 " type="submit">Kaydet</Button>
      </form>
    </Card>
  )
}

export default Addtodo