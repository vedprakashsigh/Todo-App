const List = (props) => {
  return (
    <div className="list">
      {props.todoList.map((tasks) => {
        return (
          <div className="Task">
            {tasks.taskName}
            <button
              onClick={() => {
                props.setTodoList(
                  props.todoList.filter((task) => {
                    return tasks.id !== task.id;
                  })
                );
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
