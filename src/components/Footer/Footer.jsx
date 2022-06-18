import React from "react";
import styled from "styled-components";
import { Container } from "../../styled/Container.styled";

const FooterStyled = styled.footer`
  background: #0b0d17;
  padding: 20px 0;
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
  .footer {
    &__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__text {
      font-family: "Inter";
      font-weight: 400;
      font-size: 14px;
      color: #d9dbe1;
    }
    &__social {
      display: flex;
      align-items: center;
      gap: 16px;
      &-block {
        background: #23252e;
        padding: 2px 7px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: 0.3s ease-in-out;
      }
      &-instagram {
        position: relative;
        display: inline-block;
        z-index: 1000;
        &::before {
          content: "";
          display: block;
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: opacity 0.5s ease-in-out;
          background: linear-gradient(
            45deg,
            #405de6,
            #5851db,
            #833ab4,
            #c13584,
            #e1306c,
            #fd1d1d
          );
          z-index: -1000;
          border-radius: 50%;
        }
        &:hover::before {
          opacity: 1;
        }
      }
      &-dribbble{
        &:hover{
          background: #ea4c89;
        }
      }
      &-twitter{
        &:hover{
          background: #119afb;
        }
      }
      &-youtube{
        &:hover{
          background: #ff0000;
        }
      }
    }
  }
`;

function Footer() {
  return (
    <>
      <FooterStyled>
        <Container>
          <div className="footer__content">
            <span className="footer__text">
              © 2022 Ifereum. All rights reserved
            </span>
            <div className="logo footer__logo">
              <img src="./img/logo.svg" alt="" className="logo__img" />
              Ifereum
            </div>
            <div className="footer__social">
              <div className="footer__social-block footer__social-instagram">
                <a href="#" className="footer__social-link">
                  <img
                    src="./img/footer-icon1.svg"
                    alt=""
                    className="footer__social-icon"
                  />
                </a>
              </div>
              <div className="footer__social-block footer__social-dribbble">
                <a href="#" className="footer__social-link">
                  <img
                    src="./img/footer-icon2.svg"
                    alt=""
                    className="footer__social-icon"
                  />
                </a>
              </div>
              <div className="footer__social-block footer__social-twitter">
                <a href="#" className="footer__social-link">
                  <img
                    src="./img/footer-icon3.svg"
                    alt=""
                    className="footer__social-icon"
                  />
                </a>
              </div>
              <div className="footer__social-block footer__social-youtube">
                <a href="#" className="footer__social-link">
                  <img
                    src="./img/footer-icon4.svg"
                    alt=""
                    className="footer__social-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </FooterStyled>
    </>
  );
}

export default Footer;
