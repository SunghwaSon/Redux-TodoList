import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { delete_todo } from "../redux/modules/todos";
import { isDone_toggle } from "../redux/modules/todos";
import styled from 'styled-components';

function Todo ({ todo }) {
  const dispatch = useDispatch(); //스토어로 보내고 싶은 행동(액션 => 객체)
  // const navigate = useNavigate();

  const onRemove = (id) => {
    dispatch(delete_todo(id));
  };

  const onToggle = (id) => {
    dispatch(isDone_toggle(id));
  };

  return(
    <>
    <List_Wrapper>
      <Todo_Container>
          <div>
            <div> 
              <Link to={`/detail/${todo.id}`}
              >상세보기</Link>
            </div><br/>
            <Todo_title key={todo.id}>{todo.title}</Todo_title>
            <Todo_Content>{todo.content}</Todo_Content>
          </div>
          <Button_Set>
            <Todo_Delete_Button onClick={() => onRemove(todo.id)} >삭제하기</Todo_Delete_Button>
            <Todo_Complete_Button onClick={() => onToggle(todo.id)}>
              {todo.isDone ? "취소" : "완료"}
            </Todo_Complete_Button>
          </Button_Set>
      </Todo_Container>
    </List_Wrapper>  
    </>
  );
};


export default Todo;

const List_Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

const Todo_Delete_Button = styled.div`
  background-color: #fff;
  border: 1px solid red;
  border-radius: 8px;
  cursor: pointer;
  height: 30px;
  width: 50%;
  text-align : center;
` 

const Todo_Complete_Button = styled.div`
  background-color: #fff;
  border: 1px solid green;
  border-radius: 8px;
  cursor: pointer;
  height: 30px;
  width: 50%;
  text-align : center;
`

const Button_Set = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`

const Todo_Container = styled.div`
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
`

const Todo_title = styled.strong`
  font-size: 20px;
`

const Todo_Content = styled.div`
  margin-top: 20px;
`