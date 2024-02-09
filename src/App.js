import { useState } from "react";
import "./App.css";

function App() {
  const [toDoLists, setToDoLists] = useState([]);
  const [newTask, setNewTask] = useState("");

  function deleteTask(id) {
    const newToDoList = toDoLists.filter((task) => task.id !== id);
    setToDoLists(newToDoList);
  }

  function completeTask(id) {
    const newToDoList = toDoLists.map((task) =>
      task.id === id ? { ...task, complete: true } : task
    );
    setToDoLists(newToDoList);
  }
  

  const addTask = () => {
    const task = {
      id: toDoLists.length === 0 ? 1 : toDoLists[toDoLists.length - 1].id + 1,
      taskName: newTask,
      complete:false,
    };

    setToDoLists([...toDoLists, task]);
    setNewTask(""); // Clear the input field after adding task
  };

  return (
    <div className="App">
      <input
        type="text"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        placeholder="Enter Tasks here"
      />
      <button className="addtask" onClick={addTask}>Add task</button>

      <div className="Lists">
        {toDoLists.map((task) => (
          <div key={task.id} style={{ backgroundColor: task.complete ? "green" : "white" }}>

            
            <h1>{task.taskName}</h1>
            <button className="completed" onClick={() => completeTask(task.id)}>Completed</button>
            <button className="x" onClick={() => deleteTask(task.id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
