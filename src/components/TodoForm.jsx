import React, { useState } from 'react'
import { useTodo } from '../context';

function TodoForm() {
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();

    const add = () => {
        if (!todo) return;

        addTodo({ id: Date.now(), title: todo, marked: false });
        setTodo("");
    }

    return (
        <div className="w-full max-w-md px-5 flex">
            <input className="block w-full shrink mr-5 p-2 px-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-s focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="Enter a task"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                type="button"
                onClick={() => add()}
            >Add</button>
        </div>
    )
}

export default TodoForm