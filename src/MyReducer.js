import React, { useReducer, useState } from "react";
import Todo from "./Todo";


export const ACTION = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}

function newToDo(name) {
    return { id: Date.now(), name, complete: false }
}

function reducer(todos, action) {

    switch (action.type) {
        case ACTION.ADD_TODO:
            return [...todos, newToDo(action.payload.name)]
        case ACTION.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
        case ACTION.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo
            })
        default: return todos
    }
}

export default function MyReducer() {

    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');



    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: ACTION.ADD_TODO, payload: { name } })
        setName('')
    }

    console.log(todos)
    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* <input type="text" value={name} onChange={e => setName(e.target.value)} /> */}
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </form>

            {todos.map(todo => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
            })}
        </>
    )
}