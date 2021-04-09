import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  /* height: 70vh; */
  background: #252b42;
  background-size: cover;
  font-family: 'Montserrat';
  @media (max-width: 800px) {
    /* width: 86vw; */
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;

`;

export const Title = styled.h1`
  color: #fff;
  font-size: 40px;
  line-height: 57px;
  letter-spacing: 0.2;
  font-weight: bold;
  padding: 120px 25px 20px;
`;

export const Paragraph = styled.p`
  color: #fff;
  font-size: 22px;
  line-height: 38px;
  font-weight: normal;
  letter-spacing: 0.2px;
  padding: 0px 50px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  /* justify-content: space-around; */
  padding: 60px 30px 110px;
`;
