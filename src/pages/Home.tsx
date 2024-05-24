 
import Container from "@mui/material/Container"; 
import Stack from "@mui/material/Stack";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import Todos from "../components/Todos";
import { useEffect, useState } from "react"; 
import { TodoType } from "../types";


const Home :React.FC = () => { 
 

  const [todos,setTodos] = useState<TodoType[]>([{id:1,title:"Task 1",completed:false}]);
 
    
  console.log(todos);

 


  const deleteTodo = (id:number) :void => {
    setTodos(todos.filter(todo => todo.id !== id));
     
  }

  const setIsCompleted = (id:number) : void => {
    setTodos([...todos.filter(todo=> todo.id !== id),{
     ...todos.filter(todo => todo.id === id)[0] ,
     completed: !(todos.filter(todo => todo.id === id)[0].completed)
    }])
      }
  return (
    <Container maxWidth="xl" sx={{ margin: "1rem auto", }}>
      <Stack
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        direction={"column"}
        gap={2}
      >
        <Header />
        <InputBox   setTodos={setTodos} todos={todos} />
       <Todos todos={todos} deleteTodo={deleteTodo} setIsCompleted={setIsCompleted}/>
      </Stack>
    </Container>
  );
};

export default Home;
