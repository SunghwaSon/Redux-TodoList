import { createStore, combineReducers } from "redux"
import todos from "../modules/todos"

const rootReducer = combineReducers({todoReducer: todos})

export const store = createStore(rootReducer);

