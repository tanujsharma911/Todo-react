import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: "Take Bath 🛁",
            marked: false
        }
    ],

    addTodo: (todo) => {},
    editTodo: (id, newTodo) => {},
    deleteTodo: (id) => {},
    toggleMarked: (id) => {},
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;
