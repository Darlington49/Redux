import { act } from "react-dom/test-utils";
import { createStore } from "redux";
const ADD_TODO_ACTION = 'ADD_TODO_ACTION'
let id = 2;

const initialState = [
    {
        id: 1,
        title: 'Enregistrez la video',
        completed: false
    }, {
        id: 2,
        title: 'prepare the tuto',
        completed: true
    },
]
function TodoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO_ACTION:
            return [...state, {
                id: ++id,
                completed: false,
                ...action.payload,

            }]
        default:
            return state
    }
}


const store = createStore(TodoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: ADD_TODO_ACTION, payload: { title: 'bla bla' } })
store.dispatch({ type: ADD_TODO_ACTION, payload: { title: 'bla bla' } })
store.dispatch({ type: ADD_TODO_ACTION, payload: { title: 'bla bla' } })
function App() {
    console.log("hi")
    // const state = TodoReducer(undefined, {});
    // let newState = TodoReducer(state, { type: ADD_TODO_ACTION, payload: { title: 'bla bla' } });
    // newState = TodoReducer(newState, { type: ADD_TODO_ACTION, payload: { title: 'bla bla' } });
    // newState = TodoReducer(newState, { type: ADD_TODO_ACTION, payload: { title: 'bla bla' } });
    // console.log(newState)

    return (
        <div >
            <h1>Hello World</h1>
        </div>
    );
}

export default App;
