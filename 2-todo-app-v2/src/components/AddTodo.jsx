function AddTodo() {
  return (
    <div className="container">
      <div className="row mi-row">
        <div className="col-6">
          <input type="text" placeholder="Enter todo here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success mi-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
