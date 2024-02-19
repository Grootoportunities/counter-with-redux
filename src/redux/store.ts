import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducers/counterReducer";
import { settingsReducer } from "./reducers/settingsReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  settings: settingsReducer,
});

export const store = createStore(rootReducer);

export type RootStateType = ReturnType<typeof rootReducer>;
