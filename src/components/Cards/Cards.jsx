import React from "react";
import styled from "styled-components";
import { Container } from "../../styled/Container.styled";
import { Title } from "../../styled/Title.styled";
import { motion } from "framer-motion";


const CardsStyled = styled.div`
  margin-bottom: 100px;
  .cards {
    &__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__info {
      max-width: 480px;
      &-desc {
        font-family: "Inter";
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #f7f7f7;
        margin-bottom: 30px;
      }
      &-text {
        font-family: "Raleway";
        font-weight: 700;
        font-size: 20px;
        color: #ffee2d;
      }
    }
    &__block {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }
  .card {
    max-width: 320px;
    padding: 20px;
    background: #171717;
    box-shadow: 0px 167px 67px rgba(0, 0, 0, 0.02),
      0px 94px 56px rgba(0, 0, 0, 0.06), 0px 42px 42px rgba(0, 0, 0, 0.1),
      0px 10px 23px rgba(0, 0, 0, 0.11), 0px 0px 0px rgba(0, 0, 0, 0.12);
    border-radius: 10px;
    &__top {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 20px;
    }
    &__num {
      font-family: "Rany";
      font-weight: 700;
      font-size: 128px;
      color: #ffee2d;
      &-block{
        height: 92px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &__text {
      font-family: "Raleway";
      font-weight: 700;
      font-size: 20px;
      line-height: 25px;
      color: #ffffff;
      max-width: 180px;
      display: inline-block;
    }
    &__desc {
      font-family: "Inter";
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
      color: #f7f7f7;
      max-width: 234px;
      margin-bottom: 10px;
    }
    &__btn {
      font-family: "Rany-Bold";
      font-weight: 400;
      font-size: 24px;
      color: #ffee2d;
      display: flex;
      align-items: center;
      gap: 14px;
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

function Cards() {
  return (
    <>
      <CardsStyled>
        <Container>
          <motion.div 
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className="cards__content" >
            <motion.div variants={variants} className="cards__info">
              <Title style={{ marginBottom: "30px" }}>What is IFEREUM</Title>
              <p className="cards__info-desc">
                IFEREUM is a next-generation network based on the Blockchain 4.0
                technology for sharing digital assets and a platform for
                creating and managing decentralized apps and services in
                real-time
              </p>
              <span className="cards__info-text">
                Four components of the system:
              </span>
            </motion.div>
            <div className="cards__block">
              <motion.div variants={variants} className="card">
                <div className="card__top">
                  <div className="card__num-block">
                    <h1 className="card__num">1</h1>
                  </div>
                  <span className="card__text">
                    The fastest and most secure Blockchain
                  </span>
                </div>
                <p className="card__desc">
                  More than five billion transactions per day, no more than
                  three seconds to validate a transaction
                </p>
                <div className="card__button-block">
                  <a href="#" className="card__btn">
                    More
                    <img
                      src="./img/arrow-yellow.svg"
                      alt=""
                      className="card__btn-arrow"
                    />
                  </a>
                </div>
              </motion.div>
              <motion.div variants={variants} className="card">
                <div className="card__top">
                  <div className="card__num-block">
                    <h1 className="card__num">2</h1>
                  </div>
                  <span className="card__text">
                    New generation of Smart Contracts
                  </span>
                </div>
                <p className="card__desc">
                  Decentralized real-time applications that are operated like
                  regular web services and developed
                </p>
                <div className="card__button-block">
                  <a href="#" className="card__btn">
                    More
                    <img
                      src="./img/arrow-yellow.svg"
                      alt=""
                      className="card__btn-arrow"
                    />
                  </a>
                </div>
              </motion.div>
              <motion.div variants={variants} className="card">
                <div className="card__top">
                  <div className="card__num-block">
                    <h1 className="card__num">3</h1>
                  </div>
                  <span className="card__text">Decentralized Internet</span>
                </div>
                <p className="card__desc">
                  Decentralized apps directory and a multi-asset wallet that
                  won't overload your computer
                </p>
                <div className="card__button-block">
                  <a href="#" className="card__btn">
                    More
                    <img
                      src="./img/arrow-yellow.svg"
                      alt=""
                      className="card__btn-arrow"
                    />
                  </a>
                </div>
              </motion.div>
              <motion.div variants={variants} className="card">
                <div className="card__top">
                  <div className="card__num-block">
                    <h1 className="card__num">4</h1>
                  </div>
                  <span className="card__text">
                    IFEREUM network exchange asset
                  </span>
                </div>
                <p className="card__desc">
                  IFEREUM is used to ensure the reliability of the network,
                  exchange services
                </p>
                <div className="card__button-block">
                  <a href="#" className="card__btn">
                    More
                    <img
                      src="./img/arrow-yellow.svg"
                      alt=""
                      className="card__btn-arrow"
                    />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </CardsStyled>
    </>
  );
}

export default Cards;
