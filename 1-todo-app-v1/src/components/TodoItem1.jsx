function TodoItem1() {
  let todoName = "Complete React JS";
  let dueDate = "20/06/2024";

  return (
    <div className="container">
      <div className="row mi-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{dueDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger mi-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
