const List = (props) => {
  return (
    <div className="list">
      {props.todoList.map((tasks) => {
        return (
          <div className="Task">
            <span style={{ color: "green" }}>
              {tasks.completed && tasks.taskName}
            </span>
            <span>{!tasks.completed && tasks.taskName}</span>
            <button
              onClick={() => {
                props.setTodoList(
                  props.todoList.map((task) => {
                    return tasks.id === task.id
                      ? {
                          id: tasks.id,
                          taskName: tasks.taskName,
                          completed: !tasks.completed,
                        }
                      : task;
                  })
                );
              }}
            >
              Complete
            </button>
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
