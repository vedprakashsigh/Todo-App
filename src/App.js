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
            setTodoList([...todoList, newTasks]);
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
        {todoList.map((task) => {
          return <p>{task}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
