import React from "react";
import { Container } from "../../styled/Container.styled";

import styled from "styled-components";

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px 0;
  margin-bottom: 160px;
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    color: #ffffff;
    gap: 15px;
    text-transform: uppercase;
  }
  .lang {
    position: absolute;
    right: 0;
  }
`;

function Header() {
  return (
    <>
      <Container>
        <HeaderStyled>
          <div className="logo">
            <img src="./img/logo.svg" alt="" className="logo__img" />
            Ifereum
          </div>
          <div className="lang">
            <img src="./img/lang.svg" alt="" className="lang__img" />
          </div>
        </HeaderStyled>
      </Container>
    </>
  );
}

export default Header;
