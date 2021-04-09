import React from "react";
import * as S from "./styles";
import logo from "../../Assets/BellaOlonjelogo.png";
import instagram from "../../Assets/instagram.png";
import twitter from "../../Assets/twitter.png";
import facebook from "../../Assets/facebook.png";

const FooterBar = () => {
  return (
    <S.Container>
      <img src={logo} alt="Logo do Bella Olonje" />
      <S.Wrapper>
        <img src={twitter} alt="Logo do Twitter" />
        <img src={facebook} alt="Logo do Facebook" />
        <img src={instagram} alt="Logo do Instagram" />
      </S.Wrapper>

      <p>Copywright 2020 Bella Onojie.com</p>
    </S.Container>
  );
};

export default FooterBar;
