import React from "react";
import { Container } from "../../utils/Container/styles";
import * as S from "../../styles/styles";
import payment from "../../../Assets/payment.png";

const Checkout = () => {
  return (
    <Container>
      <S.Image src={payment} alt="Image da tela de pagamento do aplicativo" />
      <S.Wrapper>
        <S.SubTitle>Checkout</S.SubTitle>
        <S.Title>When you done check out and get it delivered.</S.Title>
        <S.Paragraph>
          When you done check out and get it delivered with ease.
        </S.Paragraph>
      </S.Wrapper>
    </Container>
  );
};

export default Checkout;
