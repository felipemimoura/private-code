import React from "react";
import * as S from "./styles";
import instagram from "../../Assets/instagram.png";
import twitter from "../../Assets/twitter.png";
import facebook from "../../Assets/facebook.png";

function MobileFooter() {
  return (
    <S.Container>
      <S.Wrapper>
        <img src={twitter} alt="Logo do Twitter" />
        <img src={facebook} alt="Logo do Facebook" />
        <img src={instagram} alt="Logo do Instagram" />
      </S.Wrapper>
        <S.Paragraph>Just type what's on your mind and we'll</S.Paragraph>
    </S.Container>
  );
}

export default MobileFooter;
