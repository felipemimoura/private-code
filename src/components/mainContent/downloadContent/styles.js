import styled from "styled-components";
import download from "../../../Assets/footerimage.png";

export const Container = styled.section`
  width: 100%;
  height: 70vh;
  background: url(${download}) no-repeat;
  background-size: cover;

  @media (max-width: 800px) {
    background: #252b42;

  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  height: 80%;

  @media (max-width: 800px) {
    justify-content: space-evenly;
    padding-top:15vh;
    text-align:center
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 40px;
  line-height: 57px;
  letter-spacing: 0.2;
  font-weight: bold;
  @media (max-width: 800px) {
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  color: #fff;
  font-size: 24px;
  line-height: 38px;
  font-weight: normal;
  letter-spacing: 0.2px;
`;
