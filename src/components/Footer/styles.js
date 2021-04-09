import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 15vh;
  padding: 15px;
  margin-top: 20px;

  @media(max-width: 800px){
    flex-direction: column
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15vw;

`;
