import React from "react";
import { HOME_TITLE, HOME_DESCRIPTION  } from "@/consts/home";
import * as S from "./HomeView.styled";


const HomeView = () => {

  return (
    <S.Wrapper>
      <S.Title>{HOME_TITLE}</S.Title>
      <S.Ment>{HOME_DESCRIPTION}</S.Ment>
    </S.Wrapper>
  );
};

export default HomeView;
