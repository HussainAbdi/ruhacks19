import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

const HeaderText = styled.div`
  background-color: white;
  font-family: "San Francisco";
  font-weight: 700;
  text-align: center;
  margin-left: 25.3%;
  margin-right: 25.3%;
  color: #000000;
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
