import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import { TodoType } from "../types";

type IProps = {
  todos: TodoType[];
  deleteTodo: (id: number) => void;
  setIsCompleted: (id: number) => void;
};

const Todos: React.FC<IProps> = ({ todos, deleteTodo, setIsCompleted }) => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent={"center"}
      alignItems={"start"}
      mt={4}
      alignSelf={"stretch"}
      gap={1}
    >
      <Grid item border={2} borderRadius={3} xs={9} md={5}>
        <Typography color={"blue"} align="center">
          Inprogress Todos
        </Typography>
        <List sx={{ paddingRight: "1rem", paddingBottom: "1rem",minHeight:"10rem"  }}>
          {todos.map((todo) => !todo.completed).length > 0 ? (
            todos.map(
              (todo, index) =>
                todo.completed || (
                  <ListItem
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingRight: "1.5rem",
                      borderRadius: "5px",
                      transiiton: ".5s all",
                      ":hover": {
                        backgroundColor: "bisque",
                      },
                    }}
                  >
                    <Box
                      flexGrow={1}
                      onClick={() => setIsCompleted(todo.id)}
                      sx={{ cursor: "pointer",textTransform:"capitalize" }}
                    >
                      {todo.title}
                    </Box>
                    <Box>
                      <DeleteIcon
                        onClick={() => deleteTodo(todo.id)}
                        sx={{
                          color: "gray",
                          cursor: "pointer",
                          ":hover": { color: "purple" },
                          transition: ".5s all",
                        }}
                      />
                    </Box>
                  </ListItem>
                )
            )
          ) : (
            <Typography align="center" color={"red"} my={3}>
              There is no inprogress Task
            </Typography>
          )}
        </List>
      </Grid>
      <Grid item border={2} borderRadius={3} xs={9} md={5} >
        <Typography color="green" align="center">
          {" "}
          Completed Todos
        </Typography>
        <List sx={{ paddingRight: "1rem", paddingBottom: "1rem",minHeight:"10rem" }}>
          {todos.map((todo) => todo.completed).length > 0 ? (
            todos.map(
              (todo, index) =>
                todo.completed && (
                  <ListItem
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingRight: "1.5rem",
                      borderRadius: "5px",
                      transiiton: ".5s all",
                      ":hover": {
                        backgroundColor: "bisque",
                      },
                    }}
                  >
                    <Box
                      flexGrow={1}
                      onClick={() => setIsCompleted(todo.id)}
                      sx={{ cursor: "pointer",textTransform:"capitalize" }}
                    >{todo.title}</Box>
                    <Box>
                      <DeleteIcon
                        onClick={() => deleteTodo(todo.id)}
                        sx={{
                          color: "gray",
                          cursor: "pointer",
                          ":hover": { color: "purple" },
                          transition: ".5s all",
                        }}
                      />
                    </Box>
                  </ListItem>
                )
            )
          ) : (
            <Typography align="center" color={"red"} my={3}>
              There is no completed Task
            </Typography>
          )}
        </List>
      </Grid>
    </Grid>
  );
};

export default Todos;
