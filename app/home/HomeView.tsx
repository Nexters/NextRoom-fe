import React from "react";
import MainDrawer from "@/components/common/Drawer/Drawer";
import MakeThemePage from "@/components/MakeThemePage/MakeThemePage";
import EmptyHome from "@/components/common/EmptyHome/EmptyHome";
import HintList from "@/components/ThemeDetail/ThemeDetail";
import Header from "@/components/common/Header/Header";

import { Themes } from "@/queries/getThemeList";
import { useModalStateValue } from "@/components/atoms/modals.atom";

import * as S from "./HomeView.styled";

type Props = {
  categories: Themes;
  handleDialog: ()=>void;
};

function HomeView(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { categories, handleDialog } = props;
  const modalState = useModalStateValue();
  let content;
  if (!categories) {
    content = <EmptyHome />;
  } else if (!modalState.isOpen) {
    content = <HintList />;
  } else {
    content = <MakeThemePage />;
  }

  return (
    <S.Wrapper>
      <MainDrawer {...props} />
      <S.Cont component="main">
        <Header />
        {content}
      </S.Cont>
    </S.Wrapper>
  );
}
export default HomeView;
