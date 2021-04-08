import styled from "styled-components";
import firtImage from "../../../Assets/fristImage.png";

export const Container = styled.section`
  width: 100%;
  height: 80vh;
  background: url(${firtImage}) no-repeat;
  background-size: cover;

  @media (max-width: 800px) {
    background: #fafafa;

  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  height: 80%;
`;

export const Title = styled.h1`
  color: white;
  font-size: 58px;
  line-height: 80px;
  margin: 0 auto;
  width: 100vw;
  text-align: center;
  letter-spacing: 0.2px;

  @media (max-width: 800px) {
    color: #252b42;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: 0.2px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 24px;
  line-height: 36px;
  font-weight: ${(props) => (props.food ? "700" : "500")};
  color: #f6f6f6;
  letter-spacing: 0.2px;
  @media (max-width: 800px) {
      color: #737373;
      letter-spacing: 0.1px;
      font-size: 16px;
      line-height: 24px;
  }
`;
