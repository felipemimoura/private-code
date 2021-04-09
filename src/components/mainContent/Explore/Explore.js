import React from "react";
import { Container } from "../../utils/Container/styles";
import * as S from "../../styles/styles";
import feed from "../../../Assets/feed.png";

const Explore = () => {
  return (
    <Container left>
      <S.Image src={feed} alt="Imagem mostrando o feed do aplicativo" />
      <S.Wrapper>
        <S.SubTitle>Explore varieties</S.SubTitle>
        <S.Title>Shop for your favorites meal as e dey hot.</S.Title>
        <S.Paragraph>
          Shop for your favorite meals or drinks and enjoy while doing it.
        </S.Paragraph>
      </S.Wrapper>
    </Container>
  );
};

export default Explore;
