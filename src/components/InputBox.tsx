 
 
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { TodoType } from "../types";

type IProps = {
   
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  todos:TodoType[];
}
const InputBox : React.FC<IProps> = ({  setTodos,todos}) => { 

  const [todoInput,setTodoInput] = useState<string>("");


  const handleSubmit = (e:React.FormEvent) :void=> { 
    e.preventDefault()
    
    console.log(todoInput);
    todoInput.trim() && 
    setTodos([...todos,{
      id: new Date().getTime(),
      title:todoInput,
      completed:false, 
    }])
    setTodoInput("") 
}
    
  return (
    <Box
    display={"flex"}
  //   alignItems={"s"}
    justifyContent={"center"}
    gap={1}
    alignSelf={"stretch"}
  //   border={1}
  component={"form"}
  onSubmit={handleSubmit}
  >
    <TextField autoFocus fullWidth placeholder="New Todo" value={todoInput} onChange={(e)=>setTodoInput(e.target.value)} />
    <Button type="submit" variant="contained" color="secondary" sx={{whiteSpace:"nowrap"}}>
      ADD TODO
    </Button>
  </Box>
  )
}

export default InputBox