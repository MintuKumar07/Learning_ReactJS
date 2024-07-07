import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {

  const [todoItems, setTodoItems] = useState([]);

  const handleNewTodoItems = (itemName, itemDueDate) => {
    setTodoItems([...todoItems, { name: itemName, dueDate: itemDueDate }]);
  };

  const handleDeleteTodoItems = (itemName) => {
    const newTodoItems=(todoItems.filter((item) => item.name !== itemName));
    setTodoItems(newTodoItems);
  }

  return (
    <center className="container">
      <AppName />
      <AddTodo onNewItem={handleNewTodoItems}></AddTodo>
      {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteTodoItems}
      ></TodoItems>
    </center>
  );
}

export default App;
