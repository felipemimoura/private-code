import React from "react";
import * as S from "./styles";

export const Container = ({ children, left }) => {
  if (left) {
    return <S.Container left>{children}</S.Container>;
  } else {
    return <S.Container >{children}</S.Container>;
  }
};
