import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  float: right;
  margin-top: 20px;
`;
const List = styled.ul`
  list-style: none;
`;
const Item = styled.li`
  float: left;
  margin: 0 10px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <>
      <Wrap>
        <List>
          <Item>Kvalifikace</Item>
          <Item>Práce ve školství</Item>
          <Item>Začínám učit</Item>
          <Item>Motivace</Item>
          <Item>O nás</Item>
          <Item>Kontakt</Item>
        </List>
      </Wrap>
    </>
  );
};
export default Navbar;
