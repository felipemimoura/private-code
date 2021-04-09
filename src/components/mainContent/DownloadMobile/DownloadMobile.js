import React from "react";
import Button from "../../utils/Button/Button";
import * as S from "./styles";

function DownloadMobile() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>Download the app now.</S.Title>
        <S.Paragraph>Most calendars are designed for teams.</S.Paragraph>
        <S.ButtonContainer>
          <Button footer>Buy Now</Button>
          <Button footer apple>Try for Free</Button>
        </S.ButtonContainer>
      </S.Wrapper>
    </S.Container>
  );
}

export default DownloadMobile;
