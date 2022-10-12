import React from "react";
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';
import styled from 'styled-components';


function Layout() {
  return (
    <StBox>
        <Header />
        <Form />
        <TodoList />
    </StBox>
  );
}

export default Layout;

const StBox = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
`;

