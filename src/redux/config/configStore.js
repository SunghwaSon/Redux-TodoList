import { createStore, combineReducers } from "redux"
import todos from "../modules/todos"

const rootReducer = combineReducers({todoReducer: todos})
// 여러 페이지일 경우, todos옆에 , 찍어서 입력!

export const store = createStore(rootReducer);

