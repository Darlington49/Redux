import React from 'react';
import { ACTION } from './MyReducer';

function Todo({ todo, dispatch }) {

    return (
        <div style={{ color: todo.complete ? '#AAA' : '#000' }}>
            <span> {todo.name}</span>
            <span> {todo.complete ? '#AAA' : '#000'}</span>
            <button onClick={() => {
                console.log(todo)
                dispatch({ type: ACTION.TOGGLE_TODO, payload: { id: todo.id } })
            }}>Toggle</button>

            <button onClick={() => {
                console.log(todo)
                dispatch({ type: ACTION.DELETE_TODO, payload: { id: todo.id } })
            }}>Delete</button>
        </div>
    );
}




export default Todo;