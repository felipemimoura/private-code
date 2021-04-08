import React from "react";
import * as S from "./styles";

const Button = ({ children, apple, footer }) => {
  if (footer) {
    if (apple) {
      return (
        <S.Button footer apple>
          {children}
        </S.Button>
      );
    } else {
      return <S.Button footer>{children}</S.Button>;
    }
  } else {
    if (apple) {
      return <S.Button apple>{children}</S.Button>;
    } else {
      return <S.Button>{children}</S.Button>;
    }
  }
};

export default Button;
