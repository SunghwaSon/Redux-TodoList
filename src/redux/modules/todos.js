const ADD_TODO = "ADD_TODO";
const DELETE = "DELETE";
const TOGGLE = "TOGGLE"

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo, //새로운 todo 값
  }
}

export const delete_todo = (id) => {
  return {
    type: DELETE,
    id, //key와 value가 같으면 한번만 쓰면 됨.(id(key): id(value))
  }
}
export const isDone_toggle = (id) => {
  return {
    type: TOGGLE,
    id,
  }
}


const initialState = {
  todoList: [
    {
      id: 1,
      title: "리액트를 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      isDone: true
    },
  
    {
      id: 2,
      title: "리액트를 연습하기",
      content: "리액트 연습을 해봅시다.",
      isDone: false
    }
  ]
};// 원래는 빈 배열. TodoList에서 필요없는 부분 다 지우고, 브라우저에 뜨는지 확인을 위해 입력.



const todos = (state = initialState, action) => {
  // todoList 상태를 변화시키는 부분
  switch (action.type) {
    case ADD_TODO :
      return { //{}해주는 이유 : initialState가 객체라서 똑같이 해줘야 한다.
        ...state,
        todoList : [...state.todoList, action.payload],
      } 
      

    case DELETE :
      return {
        ...state,
        todoList: [...state.todoList.filter((todo) => todo.id !== action.id)]
        // todoList : state.todoList.filter((todo) => todo.id !== action.id) 도 가능
      } 
      

    case TOGGLE : 
      return {
        ...state,
        todoList : [...state.todoList.map((todo) => todo.id === action.id? 
                    {...todo, isDone: !todo.isDone} : todo)]
                    //전개연산자를 사용. 원래 값 : 반대값
      } 
      //todoList 배열을 순회하면서
      //매개변수로 접근되는 todo의 id와 action의 id가 같을 경우
      //삼항연산자를 사용하여
      //조건이 참이면 todo 내용을 전개연산자를 사용해서 원래 속성값을 유지한 후 isDone을 현재 todo의 반대값(not 연산자를 사용)으로 변경하고
      //조건이 거짓이면 원래의 todo를 그대로 리턴하게 작성했다.


    default:
      return {...state}
  }
};

export default todos;