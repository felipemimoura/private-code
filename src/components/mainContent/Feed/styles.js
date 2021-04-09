import styled from "styled-components";

export const Feed = styled.section`
  text-align: center;
  /* transform: translateY(-30vh); */
 

  @media (max-width: 800px) {
    max-width: 100vw;
  }
  `;

export const Image = styled.img`
  border-bottom: 3px solid #e4e4e4;
  transform: translateY(-30vh);
  @media (max-width: 800px) {
    width: 90vw;
    height: 100vh;

  }
`;
