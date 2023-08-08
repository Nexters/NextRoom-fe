import React from "react";
// eslint-disable-next-line import/no-cycle
import MainDrawer from "@/components/common/Drawer/Drawer";
import MakeThemeModal from "@/components/MakeThemeModal/MakeThemeModal";
import EmptyHome from "@/components/common/EmptyHome/EmptyHome";
import HintList from "@/components/ThemeDetail/ThemeDetail";

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
          <S.TopNav>
            <div />
          </S.TopNav>
          {categories ? <HintList /> : <EmptyHome />}
        </S.Cont>
      </S.Wrapper>
      <MakeThemeModal />;
    </>
  );
}

export default HomeView;
