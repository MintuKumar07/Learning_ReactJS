import { useRef } from "react";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();

    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";

    //console.log(`${todoName} due on ${dueDate}`);
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container">
      <form className="row mi-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter todo here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success mi-button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
