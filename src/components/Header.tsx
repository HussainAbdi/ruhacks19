import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const HeaderText = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  display: inline-block;
  background-color: white;
  font-family: "San Francisco";
  font-weight: 700;
  text-align: center;
  color: black;
  font-size: 48px;
  border-radius: 20px;
`;

interface IProps {
  text: string;
}

const Header = (props: IProps) => (
  <HeaderContainer>
    <HeaderText>{props.text}</HeaderText>
  </HeaderContainer>
);

export default Header;
