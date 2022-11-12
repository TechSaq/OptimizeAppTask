import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import thunkMiddleware from 'redux-thunk';

const composedEnhancer = applyMiddleware(thunkMiddleware);

export const store = createStore(rootReducer, composedEnhancer)
