import { useEffect, useState } from "react"
import { TodoProvider } from "./context"

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos(todos => [{ ...todo }, ...todos]);
  }
  const editTodo = (id, newTodo) => {
    setTodos(todos => todos.map(todo => todo.id === id ? newTodo : todo));
  }
  const deleteTodo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }
  const toggleMarked = (id) => {
    setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, marked: !todo.marked } : todo));
  }

  useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem("todos"));

    if (getTodos && getTodos.length) {
      setTodos(getTodos);
    }

  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, editTodo, deleteTodo, toggleMarked }}>
      <div className="flex flex-col items-center gap-5 w-full max-md: mx-auto px-5 h-screen py-10">
        <h1 className="mb-4 text-2xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Todo App v2</h1>
        <TodoForm />

        <div className="w-full max-w-md px-5">
          <ul className="flex flex-col p-3 rounded-md border-gr border border-gray-300">
            {todos.map((todo) => (
              <TodoList key={todo.id} id={todo.id} title={todo.title} marked={todo.marked} />
            ))}
            <span className="text-gray-400 text-center">{todos.length ? "" : "No todos to display"}</span>
          </ul>
        </div>
      </div >
    </TodoProvider>
  )
}

export default App
