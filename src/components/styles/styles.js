import styled from "styled-components";
import { Fonts } from "../../styles/global";



export const Wrapper = styled.div`
  max-width: 40vw;
  
  
  margin: 5vw;
  @media (max-width: 800px) {
    /* width: 86vw; */
    max-width: 100vw;
    text-align: center;
  }
`;

export const Image = styled.img`
  /* width: 50vw; */
  
  @media (max-width: 800px) {
    width: 100vw;

    height: 95vh;
  
  }
`;
export const SubTitle = styled.h3`
  color: #fa4a0c;
  font-size: 24px;
  line-height: 36px;
  font-weight: bold;
  letter-spacing: 0.1px;
  margin-bottom: 17px;
  @media (max-width: 800px) {
    /* width: 85vw; */
    font-size: 28px;
    text-align: center;
  }
`;

export const Title = styled.h2`
  color: #252b42;
  font-size: 40px;
  line-height: 57px;
  font-weight: bold;
  letter-spacing: 0.2px;
  margin-bottom: 27px;
  font-family: ${Fonts}, sans-serif;
  text-align: center;
  @media (max-width: 800px) {
    /* width: 85vw; */
    font-size: 28px;
    /* text-align: center; */
  }
`;

export const Paragraph = styled.p`
  color: #737373;
  font-size: 24px;
  line-height: 38px;
  font-weight: 500px;
  letter-spacing: 0.2px;
  @media (max-width: 800px) {
    /* width: 86vw; */
  }
`;
