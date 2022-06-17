import React from "react";
import styled from "styled-components";
import { Container } from "../../styled/Container.styled";
import { Title } from "../../styled/Title.styled";

const BenefitsStyled = styled.div`
  margin-bottom: 100px;
  .benefits {
    &__content {
      display: flex;
      justify-content: space-between;
    }
    &__info {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 40px 100px;
    }
    &__item {
      &-block {
        margin-bottom: 15px;
      }
      &-title {
        font-family: "Raleway";
        font-weight: 700;
        font-size: 20px;
        line-height: 27px;
        color: #f7f7f7;
        max-width: 214px;
        margin-bottom: 10px;
      }
      &-desc {
        font-family: "Inter";
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        color: #f7f7f7;
        max-width: 200px;
      }
    }
    &__img -block {
      max-width: 444px;
    }
    &__img {
      width: 100%;
      object-fit: cover;
    }
  }
`;

function Benefits() {
  return (
    <>
      <BenefitsStyled>
        <Container>
          <Title style={{ marginBottom: "60px" }}>Our Benefits</Title>
          <div className="benefits__content">
            <div className="benefits__info">
              <div className="benefits__info-item">
                <div className="benefits__item-iblock">
                  <img
                    src="./img/benefits-icon1.svg"
                    alt=""
                    className="benefits__item-img"
                  />
                </div>
                <h3 className="benefits__item-title">3-type Referral System</h3>
                <p className="benefits__item-desc">
                  Invite your friends and earn a certain commission reward every
                  time they make a swap on Ifereum and 5% from their income in
                  Farms & Launchpools.
                </p>
              </div>
              <div className="benefits__info-item">
                <div className="benefits__item-iblock">
                  <img
                    src="./img/benefits-icon2.svg"
                    alt=""
                    className="benefits__item-img"
                  />
                </div>
                <h3 className="benefits__item-title">
                  The Lowest Exchange Fee
                </h3>
                <p className="benefits__item-desc">
                  Safely buy and sell your cryptocurrency with the lowest
                  exchange fee in the DeFi space.
                </p>
              </div>
              <div className="benefits__info-item">
                <div className="benefits__item-iblock">
                  <img
                    src="./img/benefits-icon3.svg"
                    alt=""
                    className="benefits__item-img"
                  />
                </div>
                <h3 className="benefits__item-title">
                  Trade Fee Reimbursement
                </h3>
                <p className="benefits__item-desc">
                  Make a swap on Ifereum at no cost. Up to 90% of the trading
                  fee returned in BSW tokens.
                </p>
              </div>
              <div className="benefits__info-item">
                <div className="benefits__item-iblock">
                  <img
                    src="./img/benefits-icon4.svg"
                    alt=""
                    className="benefits__item-img"
                  />
                </div>
                <h3 className="benefits__item-title">Competitions</h3>
                <p className="benefits__item-desc">
                  Participate in the regular Ifereum trading competitions and
                  win exclusive prizes.
                </p>
              </div>
            </div>
            <div className="benefits__img-block">
              <img
                src="./img/benefits-img.svg"
                alt=""
                className="benefits__img"
              />
            </div>
          </div>
        </Container>
      </BenefitsStyled>
    </>
  );
}

export default Benefits;
