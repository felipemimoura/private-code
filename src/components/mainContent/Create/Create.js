import React from "react";
import { Container } from "../../utils/Container/styles";
import * as S from "../../styles/styles";
import login from "../../../Assets/login.png";

const Create = () => {
  return (
    <Container>
      <img src={login} alt="Image da tela de login do aplicado" />
      <S.Wrapper>
        <S.SubTitle>Create an account</S.SubTitle>
        <S.Title>Create/Login to an existing account to get started</S.Title>
        <S.Paragraph>
          An account is created with your email and a desired password
        </S.Paragraph>
      </S.Wrapper>
    </Container>
  );
};

export default Create;
