import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5px 16px;
  width: 100vw;
`;

export const Image = styled.img`
  width: 104px;
  height: 50px;
`;

export const Hamburger = styled.span`
  display: block;
  background: #000;
  width: 30px;
  height: 2px;
  position: relative;
  margin-right: 2px;

  &::before,
  &::after {
    background: #000;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  &::before {
    top: -10px;
  }
  &::after {
    bottom: -10px;
  }
`;
