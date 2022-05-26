import counterReducers from "./counter";
import loggedReducers from "./isLogged";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducers,
    isLogged: loggedReducers
})

export default allReducers;