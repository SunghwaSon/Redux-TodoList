import React from "react";
import { useSelector } from "react-redux";
import Todo from './Todo';
import styled from 'styled-components';

const TodoList = () => {
  const { todoReducer } = useSelector((state) => state);
  const todoWorking = todoReducer.todoList.filter((e) => !e.isDone);
  const todoDone = todoReducer.todoList.filter((e) => e.isDone);
  // config에서  ({todoReducer: todos}) 확인.
  // todoReducer 안에 todos가 있으니 (todos에 todoList가 있음)

  
  return (
    <>
      <List_Container>
          <h2>Working.. 🔥</h2>   
        <List_Wrapper>
          {todoWorking.map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
        </List_Wrapper>
          <h2>Done..! 🎉</h2>
        <List_Wrapper>
          {todoDone.map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
        </List_Wrapper>
      </List_Container> 
    </>
)}  

export default TodoList;


const List_Container = styled.div`
  padding: 0 24px;
`
const List_Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

