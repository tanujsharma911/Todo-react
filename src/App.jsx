import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(["Take shower 🚿", "Plant the tree 🌳"]);
  const [task, setTask] = useState("");

  const addTask = (e) => {
    if (task.trim() === "") {
      setTask("");
      return;
    }

    setTodos(t => [...t, task]);
    setTask("");
  }
  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }
  const moveTaskUp = (index) => {
    if (index > 0) {
      const temp = [...todos];
      [temp[index], temp[index - 1]] = [temp[index - 1], temp[index]];
      setTodos(temp);
    }
  }
  const moveTaskDown = (index) => {
    if (index < todos.length - 1) {
      const temp = [...todos];
      [temp[index], temp[index + 1]] = [temp[index + 1], temp[index]];
      setTodos(temp);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5 min-w-sm mx-auto h-screen py-10">
      <div className="w-full max-w-md mx-5 flex">
        <input
          type="text"
          placeholder="Enter a task"
          className="block w-full shrink mr-5 p-2 px-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-s focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={addTask}
        >Add</button>
      </div>
      <ol className="w-full max-w-md mx-5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {todos.map((todo, index) =>
          <li key={index} className="w-full px-4 py-2 flex items-center justify-between border-gray-200 dark:border-gray-600">
            {todo}
            <div className="flex gap-3">
              <button onClick={() => deleteTask(index)} type="button" className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-3 py-1 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
              <button onClick={() => moveTaskUp(index)} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-3 py-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">👆</button>
              <button onClick={() => moveTaskDown(index)} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-3 py-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">👇</button>
            </div>
          </li>
        )}

      </ol>
    </div >
  )
}

export default App
