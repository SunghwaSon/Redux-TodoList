import { createStore, combineReducers } from "redux"
import todos from "../modules/todos"

const rootReducer = combineReducers({todoReducer: todos})
// 여러 페이지일 경우, todos옆에 , 찍어서 입력!
// todoReducer(모듈의 이름)
// 만약, todoReducer: todoReducer 또는 todos : todos 일 때는 
// todoReducer 또는 todos만 써도 괜춘!
// key : velue  => key와 value의 이름이 같을 때 한번만 써도 됨!

export const store = createStore(rootReducer);

