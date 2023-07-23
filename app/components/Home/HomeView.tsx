
import React from "react";
import MainDrawer from "@/components/common/Drawer/Drawer";
import MakeThemeModal from "@/components/MakeThemeModal/MakeThemeModal";
import EmptyHome from "@/components/common/EmptyHome/EmptyHome";
import * as S from "./HomeView.styled";

function HomeView(props: Props) {
  return (
    <>
      <S.Wrapper>
        <MainDrawer open/>
        <S.Cont
          component="main"
        >
          <EmptyHome />
          {/* <HintList/> */}
        </S.Cont>
      </S.Wrapper>
      <MakeThemeModal />;
    </>
  );
}

export default HomeView;

