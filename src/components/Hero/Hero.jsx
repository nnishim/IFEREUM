import React from "react";
import styled from "styled-components";
import { Container } from "../../styled/Container.styled";
import { motion } from "framer-motion";


const HeroStyled = styled.div`
  position: relative;
  margin-bottom: 100px;
  .hero {
    &__content {
      max-width: 1079px;
      margin: 0 auto;
    }
    &__title {
      font-family: "Raleway";
      font-weight: 700;
      font-size: 84px;
      color: #fff;
      text-align: center;
      margin-bottom: 20px;
      line-height: 90px;
      &--yellow {
        background: linear-gradient(
          90deg,
          rgba(255, 233, 124, 1) 0%,
          rgba(254, 245, 166, 1) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    &__desc {
      font-family: "Inter";
      font-weight: 400;
      font-size: 20px;
      text-align: center;
      color: #f7f7f7;
      max-width: 594px;
      margin: 0 auto;
      margin-bottom: 20px;
    }
    &__button-block {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__btn {
      display: inline-block;
      font-family: "Raleway";
      font-weight: 700;
      font-size: 24px;
      color: #171717;
      padding: 11px 60px;
      background: #ffee2d;
      display: flex;
      align-items: center;
      gap: 10px;
      border-radius: 10px;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: #c8ba21;
      }
    }
    &__social {
      position: absolute;
      right: 30px;
      top: 0;
      margin-top: -70px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 20px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(50px);
      border-radius: 20px;
      padding: 10px 15px;
    }
  }
`;

const variants = {
  offscreen: {
    scale: 0,
  },
  onscreen: {
    scale: 1,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

function Hero() {
  return (
    <>
      <HeroStyled>
        <div className="hero__social">
          <div className="hero__social-item">
            <a href="#" className="hero__social-link">
              <img
                src="./img/social1.svg"
                alt=""
                className="hero__social-icon"
              />
            </a>
          </div>
          <div className="hero__social-item">
            <a href="#" className="hero__social-link">
              <img
                src="./img/social2.svg"
                alt=""
                className="hero__social-icon"
              />
            </a>
          </div>
          <div className="hero__social-item">
            <a href="#" className="hero__social-link">
              <img
                src="./img/social3.svg"
                alt=""
                className="hero__social-icon"
              />
            </a>
          </div>
          <div className="hero__social-item">
            <a href="#" className="hero__social-link">
              <img
                src="./img/social4.svg"
                alt=""
                className="hero__social-icon"
              />
            </a>
          </div>
          <div className="hero__social-item">
            <a href="#" className="hero__social-link">
              <img
                src="./img/social5.svg"
                alt=""
                className="hero__social-icon"
              />
            </a>
          </div>
          <div className="hero__social-item">
            <a href="#" className="hero__social-link">
              <img
                src="./img/social6.svg"
                alt=""
                className="hero__social-icon"
              />
            </a>
          </div>
          <div className="hero__social-item">
            <a href="#" className="hero__social-link">
              <img
                src="./img/social7.svg"
                alt=""
                className="hero__social-icon"
              />
            </a>
          </div>
          <div className="hero__social-item">
            <a href="#" className="hero__social-link">
              <img
                src="./img/social8.svg"
                alt=""
                className="hero__social-icon"
              />
            </a>
          </div>
          <div className="hero__social-item">
            <a href="#" className="hero__social-link">
              <img
                src="./img/social9.svg"
                alt=""
                className="hero__social-icon"
              />
            </a>
          </div>
        </div>
        <Container>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className="hero__content">
            <motion.h1 className="hero__title" variants={variants}>
              <span className="hero__title--yellow">The First DEX on BNB</span>{" "}
              Chain with a three-type referal system
            </motion.h1>
            <motion.p className="hero__desc" variants={variants}>
              Enjoy profitable yield farming and exchanging with the lowest fees
              in DeFi space
            </motion.p>
            <motion.div className="hero__button-block" variants={variants}>
              <a href="#" className="hero__btn">
                Trade Now
                <img src="./img/arrow.svg" alt="" className="hero__arrow" />
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </HeroStyled>
    </>
  );
}

export default Hero;
