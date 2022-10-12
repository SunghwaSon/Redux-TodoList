import React from "react";
import styled from 'styled-components';

function Header() {
  return (
    <div>
      <Header_Style>
        <div>My Todo List</div>
        <div>React</div>
      </Header_Style>
    </div>
  );
}

export default Header;

const Header_Style = styled.div `
  align-items: center;
  border: 1px solid #ddd;
  display: flex;
  height: 50px;
  padding: 0 20px;
  justify-content: space-between;
`

