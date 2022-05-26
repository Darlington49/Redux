import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
//import MyReducer from './MyReducer';
//import { createStore } from 'redux';
//import AllRedducer from "./reducers/index"
//import { Provider } from 'react-redux';
//import AppRedux from './AppRedux';
import App from './second_tuto/App'
//const store = createStore(AllRedducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
  //   {/* <App /> */}
  //   {/* <MyReducer></MyReducer> */}
  //   <AppRedux />
  // </Provider>

  <>
  <App></App>
  </>
);

