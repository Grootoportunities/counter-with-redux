import { combineReducers, createStore } from "redux";
import { reducer } from "./reducer";

const rootReducer = combineReducers({ state: reducer });

export const store = createStore(rootReducer);
