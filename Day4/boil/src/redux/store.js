import { legacy_createStore,compose,combineReducers,applyMiddleware} from "redux";
import thunk from 'redux-thunk'

import { feedReducer } from "./feed/feed.reducer";
import { authReducer } from "./auth/auth.reducer";
import { postReducer } from "./posts/posts.reducer";
const rootReduer=combineReducers({
   
    feedManager:feedReducer,
    authManager:authReducer,
    postManager:postReducer
})

const composeEnhanser=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = legacy_createStore (rootReduer,composeEnhanser(applyMiddleware(thunk)));