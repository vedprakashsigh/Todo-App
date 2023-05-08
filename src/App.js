import "./App.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTasks, setNewTasks] = useState("");

  return (
    <div className="App">
      <div className="addTask">
        <input
          type="text"
          onChange={(event) => {
            setNewTasks(event.target.value);
          }}
        />
        <button
          onClick={() => {
            const task = {
              id:
                todoList.length === 0
                  ? 1
                  : todoList[todoList.length - 1].id + 1,
              taskName: newTasks,
            };
            setTodoList([...todoList, task]);
          }}
        >
          Add Task
        </button>
        <button
          onClick={() => {
            setTodoList([]);
          }}
        >
          Clear All
        </button>
      </div>
      <div className="list">
        {todoList.map((tasks) => {
          return (
            <div className="Task">
              {tasks.taskName}
              <button
                onClick={() => {
                  setTodoList(
                    todoList.filter((task) => {
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
    </div>
  );
}

export default App;
