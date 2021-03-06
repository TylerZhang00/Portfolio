import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;

export const HalfLeft = styled.div`
  width: 50vw;
  background: #111111;
`;

export const LeftTextContainer = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #f1f1f1;
  text-align: center;
`;

export const HalfRight = styled.div`
  width: 50vw;
  background: #f1f1f1;
`;

export const RightTextContainer = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: x-large;
  padding-left: 5rem;
  @media screen and (max-width: 767px) {
    font-size: small;
  }
`;

export const TextContainer = styled.div`
  align-self: center;
  z-index: 1;
  width: 0;
  display: flex;
  flex-direction: column;
`;

export const NameText = styled.text`
  font-weight: 900;
  font-size: -webkit-xxx-large;
  margin-left: 1rem;
  @media screen and (max-width: 767px) {
    font-size: large;
  }
`;

export const NameDotContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50vw;
  padding: 1rem 0px;
`;
export const Dot = styled.div`
  height: 20px;
  width: 20px;
  align-self: flex-end;
  margin-left: 10px;
  border-radius: 50%;
`;

export const RainbowDotImg = styled.img`
  height: 100%;
  width: 100%;
`;
