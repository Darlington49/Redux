import { Provider } from "react-redux";

import store from "./store";
import { TodoList, TodoListStore } from "./compononents/TodoList";
const ADD_TODO_ACTION = 'ADD_TODO_ACTION'

// let id = 2;

// const initialState = [
//   {
//     id: 1,
//     title: 'Enregistrez la video',
//     completed: false
//   }, {
//     id: 2,
//     title: 'prepare the tuto',
//     completed: true
//   },
// ]

// function TodoReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_TODO_ACTION:
//       return [...state, {
//         id: ++id,
//         completed: false,
//         ...action.payload,

//       }]
//     default:
//       return state
//   }
// }


// const store = createStore(combineReducers({
//   TodoReducer, filter:
//     (state = 0, action) => state
// }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// store.subscribe(() => console.log(store.getState()))

// store.dispatch({ type: ADD_TODO_ACTION, payload: { title: 'bla bla' } })
// store.dispatch({ type: ADD_TODO_ACTION, payload: { title: 'bla bla' } })
// store.dispatch({ type: ADD_TODO_ACTION, payload: { title: 'bla bla' } })

function App() {
  console.log("hi")
  return (
    <Provider store={store} >
      <TodoList />
    </Provider >
  );
}

export default App;
