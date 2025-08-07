import { useState } from 'react'
import { useTodo } from '../context'

function TodoList(props) {
    const { editTodo, deleteTodo, toggleMarked } = useTodo();

    const [title, setTitle] = useState(props.title)
    const [isEditing, setIsEditing] = useState(false);

    const edit = () => {
        if (props.marked) return;

        if (!isEditing) {
            setIsEditing(true);
        }
        else {
            setIsEditing(false);
            editTodo(props.id, { id: props.id, title: title, marked: props.marked });
        }
    }
    const toggleMarkFunc = () => {
        toggleMarked(props.id);
    }

    return (
        <li className='w-full h-9 flex justify-between items-center group'>
            <div className='flex items-center w-full'>
                <input className='mr-2'
                    type="checkbox" name="title"
                    onChange={() => toggleMarkFunc()}
                    checked={props.marked}
                />
                <input className='w-full focus:outline-none focus:ring-0'
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    disabled={!isEditing}
                />

            </div>
            <div className='flex gap-2'>
                <button onClick={() => edit()} className='flex items-center justify-center w-0 h-0 bg-gray-100 rounded-full text-white group-hover:w-7 group-hover:h-7 cursor-pointer overflow-hidden transition-all duration-300' >{!isEditing ? "✏️" : "💾"}</button>
                <button onClick={() => deleteTodo(props.id)} className='flex items-center justify-center w-0 h-0 bg-red-500 rounded-full text-white group-hover:w-7 group-hover:h-7 cursor-pointer overflow-hidden transition-all duration-300'>X</button>
            </div>
        </li>
    )
}

export default TodoList