import "./App.css";
import { useState } from "react";
import AddTask from "./AddTask";
import List from "./List";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTasks, setNewTasks] = useState("");

  return (
    <div className="App">
      <AddTask
        todoList={todoList}
        setTodoList={setTodoList}
        setNewTasks={setNewTasks}
        newTasks={newTasks}
      />
      <List todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
