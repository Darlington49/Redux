import { createStore, combineReducers } from "redux";
import { filterReducer } from "./filter/filterReducer";
import { TodosReducer } from "./todosReducer";


export default createStore(combineReducers({
    todos: TodosReducer,
    filter:
        filterReducer
}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


// export default createStore(TodosReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


