import React from "react";
import MainDrawer from "@/components/common/Drawer/Drawer";
import MakeThemeModal from "@/components/MakeThemeModal/MakeThemeModal";
import EmptyHome from "@/components/common/EmptyHome/EmptyHome";
import HintList from "@/components/common/HintList/HintList";
import * as S from "./HomeView.styled";

type Props = {
  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // formProps: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  categories: Record<string, any>;
};

function HomeView(props: Props) {
  const { categories } = props;

  return (
    <>
      <S.Wrapper>
        <MainDrawer {...props} />
        <S.Cont component="main">
          {categories ? <HintList /> : <EmptyHome />}
        </S.Cont>
      </S.Wrapper>
      <MakeThemeModal />;
    </>
  );
}

export default HomeView;
