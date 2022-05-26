import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';


//STORE -> GLOBALIZED STATE

//ACTION INCREMENT
const increment = () => {
  return { type: 'INCREMENT' }
}
const decrement = () => {
  return { type: 'DECREMENT' }
}

//REDUCER
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
}

let store = createStore(counter);

//Display it on the console 
store.subscribe(() => console.log(store.getState()))

//Dispatch

store.dispatch(increment());  
store.dispatch(increment());  
store.dispatch(increment());  
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
