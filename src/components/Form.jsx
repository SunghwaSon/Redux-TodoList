import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from 'styled-components';

let nextId = 3;
const Form = () => {

  const todoInitialState = { title: "", content: "" };
  const [todo, setTodo] = useState(todoInitialState);
    // const [todoList, setTodoList] = useState([])
  const todoList = useSelector((state) => state.todoReducer.todoList)
  const dispatch = useDispatch(); //스토어로 보내고 싶은 행동
    // 리듀서에서 바뀐 값을 가져오기 위해!
  // console.log("[selectors]", selector);
  // console.log('[todoList]',todoList)

  const clickaddTodo = () => {
    if (todo.title === "" || todo.content === "") {
      return alert("입력해주세요!");
    } // 입력하지 않으면 빈 값으로 출력
  const newTodo = { ...todo, isDone: false, id: nextId++ }
  // const action = addTodo(newTodo)
  // addTodo = {type: 'ADD_TODO', payload: newTodo}
  dispatch(addTodo(newTodo));
  setTodo(todoInitialState);
}
  const changeInput = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value, //제목, 내용 입력
    });
  };

  return (
    <div>
      <Add_Form>
        <Input_Group>
          <Form_Label>제목</Form_Label>
          <Add_Input
            type="text" 
            className='add-input'
            name="title" 
            value={todo.title}
            onChange={changeInput}  
          />
          <Form_Label>내용</Form_Label>
          <Add_Input 
            type="text" 
            className='add-input'
            name="content"
            value={todo.content}
            onChange={changeInput}
          />
        </Input_Group>
        <Add_Button onClick={clickaddTodo}> 추가하기 </Add_Button>
      </Add_Form>
    </div>
  );
};

export default Form;

const Input_Group = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
` 
const Add_Form = styled.div`
  background-color: #eee;
  border-radius: 12px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
  align-items: center;
  display: flex;
  gap: 20px;
`
const Form_Label = styled.label`
  font-size: 16px;
  font-weight: 700;
`
const Add_Input = styled.input`
  border: none;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
`
const Add_Button = styled.button`
  background-color: teal;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  height: 40px;
  width: 140px;
`