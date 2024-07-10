import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState, useReducer } from "react";
import WelcomeMsg from "./components/WelcomeMsg";
import { TodoItemsContext } from "./store/todo-items-store";

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type == "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.name, dueDate: action.payload.dueDate },
    ];
  }
  else if(action.type=='DELETE_ITEM'){
    newTodoItems = currTodoItems.filter((item) => item.name != action.payload.name);
  }
  return newTodoItems;
};

function App() {
  //const [todoItems, setTodoItems] = useState([]);

  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: { name: itemName, dueDate: itemDueDate },
    };
    dispatchTodoItems(newItemAction);

    // setTodoItems([...todoItems, { name: itemName, dueDate: itemDueDate }]);
  };

  const deleteItem = (itemName) => {
    
   // const newTodoItems = todoItems.filter((item) => item.name !== itemName);
   // setTodoItems(newTodoItems);

   const deleteItemAction = {
     type: "DELETE_ITEM",
     payload: { name: itemName },
   };
   dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="container">
        <AppName />
        <AddTodo></AddTodo>
        <WelcomeMsg></WelcomeMsg>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
