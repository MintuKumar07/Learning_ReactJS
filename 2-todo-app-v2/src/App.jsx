import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {

  const todoItems = [
    {
      name: "Complete React JS",
      dueDate: "20/06/2024",
    },
    {
      name: "Complete Node JS",
      dueDate: "05/07/2024",
    },
    {
      name: "Complete MERN Stack Project",
      dueDate: "17/07/2024",
    },
  ];

  return (
    <center className="container">
      <AppName />
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
      
    </center>
  );
}

export default App;
