
import { legacy_createStore,compose,combineReducers} from "redux";

import { Counter_reducer } from "./counter/counter.reducer";
import { Todo_reducer } from "./todo/todo.reducer";


const rootReduer=combineReducers({
   
    counterManager:Counter_reducer,
    todoManager:Todo_reducer
})

const composeEnhanser=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = legacy_createStore (rootReduer,composeEnhanser());