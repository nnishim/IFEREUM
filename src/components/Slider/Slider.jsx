import React from "react";
import { Container } from "../../styled/Container.styled";
import { Title } from "../../styled/Title.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";


import "swiper/css";
import styled from "styled-components";

const SliderStyled = styled.div`
  margin-bottom: 100px;
  position: relative;
  &::before{
    content: '';
    position: absolute;
    left: 0;
    top: 62%;
    width: 100%;
    height: 10px;
    background: #FFEE2D;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background: #171717;
    box-shadow: 0px 167px 67px rgba(0, 0, 0, 0.02),
      0px 94px 56px rgba(0, 0, 0, 0.06), 0px 42px 42px rgba(0, 0, 0, 0.1),
      0px 10px 23px rgba(0, 0, 0, 0.11), 0px 0px 0px rgba(0, 0, 0, 0.12);
    border-radius: 10px;
    padding: 20px;
    max-width: 285px;
  }
  .slide {
    &__date {
      font-family: "Raleway";
      font-weight: 700;
      font-size: 32px;
      color: #ffee2d;
      margin-bottom: 25px;
    }
    &__list {
      &-item {
        font-family: "Inter";
        font-weight: 400;
        font-size: 16px;
        color: #f7f7f7;
        margin-bottom: 13px;
        display: flex;
        align-items: center;
        gap: 5px;
      }
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

function Slider() {
  return (
    <>
      <SliderStyled>
        <Container>
          <Title
            style={{
              color: "#F7F7F7",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Project Roadmap
          </Title>
          <motion.div 
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className="slider__content">
            <Swiper slidesPerView={3} spaceBetween={165} className="mySwiper">
              <SwiperSlide>
                <motion.div className="slide" variants={variants}>
                  <h2 className="slide__date">2017-2018</h2>
                  <ul className="slide__list">
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      TraceChain development
                    </li>
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      Public release of the project
                    </li>
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      Registration in Switzerland
                    </li>
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      Mainnet activation
                    </li>
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      Forging tests
                    </li>
                  </ul>
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div className="slide" variants={variants}>
                  <h2 className="slide__date">2019</h2>
                  <ul className="slide__list">
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      TraceChain development
                    </li>
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      Public release of the project
                    </li>
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      Registration in Switzerland
                    </li>
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      Mainnet activation
                    </li>
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      Forging tests
                    </li>
                  </ul>
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div className="slide" variants={variants}>
                  <h2 className="slide__date">2020</h2>
                  <ul className="slide__list">
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      TraceChain development
                    </li>
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      Public release of the project
                    </li>
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      Registration in Switzerland
                    </li>
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      Mainnet activation
                    </li>
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      Forging tests
                    </li>
                  </ul>
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div className="slide" variants={variants}>
                  <h2 className="slide__date">2021</h2>
                  <ul className="slide__list">
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      TraceChain development
                    </li>
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      Public release of the project
                    </li>
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      Registration in Switzerland
                    </li>
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      Mainnet activation
                    </li>
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      Forging tests
                    </li>
                  </ul>
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div className="slide" variants={variants}>
                  <h2 className="slide__date">2022</h2>
                  <ul className="slide__list">
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      TraceChain development
                    </li>
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      Public release of the project
                    </li>
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      Registration in Switzerland
                    </li>
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      Mainnet activation
                    </li>
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      Forging tests
                    </li>
                  </ul>
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div className="slide" variants={variants}>
                  <h2 className="slide__date">2023</h2>
                  <ul className="slide__list">
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      TraceChain development
                    </li>
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      Public release of the project
                    </li>
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      Registration in Switzerland
                    </li>
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      Mainnet activation
                    </li>
                    <li className="slide__list-item">
                      <img src="./img/slide-icon.svg" alt="" className="slide__icon" />
                      Forging tests
                    </li>
                  </ul>
                </motion.div>
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </Container>
      </SliderStyled>
    </>
  );
}

export default Slider;
