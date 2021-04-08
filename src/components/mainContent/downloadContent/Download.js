import React from "react";
import Button from "../../utils/Button/Button";
import * as S from "./styles";

const Download = () => {
  return (
    <S.Container>
      <S.Wrapper>
          <S.Title>Download the app now.</S.Title>
          <S.Paragraph>Available on your favorite store. Start your premium experience now</S.Paragraph>
        <div>
          <Button footer>Playstore</Button>
          <Button apple footer>App Store</Button>
        </div>
      </S.Wrapper>
    </S.Container>
  );
};

export default Download;
