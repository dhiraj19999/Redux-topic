import { legacy_createStore,compose} from "redux";
import { reducer } from "./reducer";

const composeEnhanser=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = legacy_createStore (reducer,composeEnhanser());