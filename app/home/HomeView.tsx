import React from "react";
// eslint-disable-next-line import/no-cycle
import MainDrawer from "@/components/common/Drawer/Drawer";
import MakeThemeModal from "@/components/MakeThemeModal/MakeThemeModal";
import EmptyHome from "@/components/common/EmptyHome/EmptyHome";
import HintList from "@/components/ThemeDetail/ThemeDetail";
import Header from "@/components/common/Header/Header";

import { Themes } from "@/queries/getThemeList";

import * as S from "./HomeView.styled";

type Props = {
  categories: Themes;
};

function HomeView(props: Props) {
  const { categories } = props;

  return (
    <>
      <S.Wrapper>
        <MainDrawer {...props} />
        <S.Cont component="main">
          <Header />
          <S.Body>{categories ? <HintList /> : <EmptyHome />}</S.Body>
        </S.Cont>
      </S.Wrapper>
      <MakeThemeModal />
    </>
  );
}

export default HomeView;
