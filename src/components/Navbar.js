import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: #111;
  z-index: 999;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Title = styled.h1`
  color: #e50914;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Nav>
      <Title>MEFLİX</Title>
    </Nav>
  );
};

export default Navbar; 