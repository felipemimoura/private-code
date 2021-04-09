import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 15vh;
  padding: 15px;
  margin-top: 20px;
  @media (max-width: 800px) {
    flex-direction: column;

    /* width: 86vw; */
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80vw;
  margin: 1.5rem;
`;

export const Paragraph = styled.p`
  color: #5c5c5c;
  font-size: 12px;
  line-height: 18px;
`;
