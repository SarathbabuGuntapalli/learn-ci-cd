import { useState } from "react";
import "./App.css";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask(e) {
    e.preventDefault();

    if (!task.trim()) return;

    setTasks((previous) => [
      ...previous,
      {
        id: crypto.randomUUID(),
        title: task.trim(),
        completed: false,
      },
    ]);

    setTask("");
  }

  function toggleTask(id) {
    setTasks((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  }

  function deleteTask(id) {
    setTasks((previous) => previous.filter((item) => item.id !== id));
  }

  return (
    <main className="container">
      <h1>React Task Manager</h1>
      <p>Learn React, GitHub Actions and CI/CD.</p>

      <form onSubmit={addTask}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          aria-label="Enter a task"
        />
        <button type="submit">Add Task</button>
      </form>

      <p>Total tasks: {tasks.length}</p>

      <ul>
        {tasks.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleTask(item.id)}
              />
              <span className={item.completed ? "done" : ""}>{item.title}</span>
            </label>

            <button type="button" onClick={() => deleteTask(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
