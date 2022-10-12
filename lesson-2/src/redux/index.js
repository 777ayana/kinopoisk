import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import kinopoiskReducer from "./reducer/kinopoiskReducer";


const rootReducer = combineReducers({
    kinopoisk: kinopoiskReducer,
})




export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))