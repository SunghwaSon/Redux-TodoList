import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Detail = () => {
  // query params로 받아온 값(id)을 통해 해당 Todo를 골라내야 함.
  const params = useParams()
  console.log(params)
  const navigate = useNavigate()
  const select = useSelector((state) => state)
  // console.log('[selector]', selector.todoReducer.todoList);
  const todoList = (select.todoReducer.todoList) // todos의 todoList
  console.log(todoList)

  const todo = todoList.find(todo => todo.id === Number(params.id))  //왜 Numbr? : params를 console로 확인하면 문자열(spring)이다.
  //params의 id와 todoList의 id가 같은 객체를 꺼냄!
  console.log(todo)

  return (
  <AllBox>
    <Box>
        <div>
          <div>
            <Params_ID>
              ID:{params.id}
            <Btn
              onClick = {() => navigate(-1)}
            > 
            이전으로 
            </Btn>
              </Params_ID>
          </div>
              <ToTitle>{todo.title}</ToTitle>
              <ToContent>{todo.content}</ToContent>
        </div>
    </Box>
  </AllBox>
  )
};

export default Detail;

const Btn = styled.button`
border: 1px solid rgb(221, 221, 221);
height: 40px;
width: 120px;
background-color: rgb(255, 255, 255);
border-radius: 12px;
cursor: pointer;
`
const Params_ID = styled.div`
  display: flex;
  height: 80px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 24px;
  -webkit-box-align: center;
  align-items: center;
`
const Box = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
`
const AllBox = styled.div`
border: 2px solid rgb(238, 238, 238);
  width: 100%;
  height: 100vh;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`
const ToTitle = styled.strong`
  padding: 24px;
  font-size: 25px;
`
const ToContent = styled.div`
  padding: 24px;
`