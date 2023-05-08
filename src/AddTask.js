const AddTask = (props) => {
  return (
    <div className="addTask">
      <input
        type="text"
        onChange={(event) => {
          props.setNewTasks(event.target.value);
        }}
      />
      <button
        onClick={() => {
          const task = {
            id:
              props.todoList.length === 0
                ? 1
                : props.todoList[props.todoList.length - 1].id + 1,
            taskName: props.newTasks,
            completed: false,
          };
          props.setTodoList([...props.todoList, task]);
        }}
      >
        Add Task
      </button>
      <button
        onClick={() => {
          props.setTodoList([]);
        }}
      >
        Clear All
      </button>
    </div>
  );
};

export default AddTask;
