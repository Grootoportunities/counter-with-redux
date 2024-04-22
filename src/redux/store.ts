import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducers/counterReducer";
import { settingsReducer } from "./reducers/settingsReducer";
import { loadState, saveState } from "../utils/localStorage";

const rootReducer = combineReducers({
  counter: counterReducer,
  settings: settingsReducer,
});

export const store = createStore(rootReducer, loadState());

store.subscribe(() => {
  saveState({
    counter: store.getState().counter,
    settings: store.getState().settings,
  });
});

export type RootStateType = ReturnType<typeof rootReducer>;
