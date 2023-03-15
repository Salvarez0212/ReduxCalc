import { legacy_createStore, combineReducers } from "redux";
import { mathReducer } from "../reducers/mathReducer";

const rootReducer = combineReducers({ mathReducer });

export const store = legacy_createStore(rootReducer);
