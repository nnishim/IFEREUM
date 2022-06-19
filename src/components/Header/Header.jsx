import React from "react";
import { Container } from "../../styled/Container.styled";
import { motion, AnimatePresence } from "framer-motion";

import styled from "styled-components";
import { useState } from "react";

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
    background: transparent;
    border: none;
    cursor: pointer;
    margin-top: -10px;
    &__block {
      position: absolute;
      right: 0;
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`;

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container>
        <HeaderStyled>
          <div className="logo">
            <img src="./img/logo.svg" alt="" className="logo__img" />
            Ifereum
          </div>
          <div className="lang__block">
            <div className="lang__icons">
              <img src="./img/lang.svg" alt="" className="lang__img" />
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{
                      height: 0,
                    }}
                    animate={{
                      height: "auto",
                      transition: { duration: .4 },
                    }}
                    exit={{
                      height: 0,  
                    }}
                    style={{ overflow: "hidden" }}
                    className="dropdown"
                  >
                    <a href="#" className="lang__link">
                      <img src="./img/russia.png" alt="" className="lang__img" />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button className="lang" onClick={() => setOpen(!open)}>
              {open ? (
                <img
                  src="./img/arrow-bottom.svg"
                  alt=""
                  className="arrow-bottom"
                  style={{ transform: "rotate(180deg)" }}
                />
              ) : (
                <img
                  src="./img/arrow-bottom.svg"
                  alt=""
                  className="arrow-bottom"
                />
              )}
            </button>
          </div>
        </HeaderStyled>
      </Container>
    </>
  );
}

export default Header;
