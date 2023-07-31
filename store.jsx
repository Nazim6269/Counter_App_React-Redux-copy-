import { createStore } from "redux";
//internal import
import { counterReducer } from "./src/reducers/counterReducer";

export const store = createStore(counterReducer);
