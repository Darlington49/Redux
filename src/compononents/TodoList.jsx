import React, { useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { deleteTodoAction, toggleTodoAction } from "../store/todoActions";
import { todoSelector } from "../store/todoSelectors";
import { UPDATE_TODO_ACTION } from "../store/todosReducer";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <label htmlFor="">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
        />
        {todo.title}
        <button onClick={() => onDelete(todo)}>X</button>
      </label>
    </li>
  );
}

// export function TodoList({ todos, onToggle }) {
export function TodoList() {
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();
  console.log("hook selector", useSelector(todoSelector));
  console.log("hook dispatch", useDispatch());
  const onToggle = useCallback((todo) => {
    dispatch(toggleTodoAction(todo));
  }, []);
  const onDelete = useCallback((todo) => {
    dispatch(deleteTodoAction(todo));
  }, []);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          key={todo.id}
        />
      ))}
    </ul>
  );
}

// export const TodoListStore = connect(
//     (state) => {
//         console.log("state store", state)
//         return {
//             //state contain the stores here filter and todos
//             // todos: state.todos
//             todos: todoSelector(state)
//         }
//     },
//     (dispatch) => {
//         console.log("dispatch", dispatch)
//         return {
//             // onToggle: todo => dispatch({
//             //     type: UPDATE_TODO_ACTION,
//             //     payload: { ...todo, completed: !todo.completed }
//             // })
//             onToggle: todo => dispatch(toggleTodoAction(todo))
//         }
//     }
// )(TodoList)
