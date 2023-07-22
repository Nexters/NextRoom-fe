import React from "react";
import MainDrawer from "@/components/common/Drawer/Drawer";
import MakeThemeModal from "@/components/MakeThemeModal/MakeThemeModal";
// import EmptyHome from "@/components/common/EmptyHome/EmptyHome";
import HintList from "@/components/common/HintList/HintList";
import * as S from "./HomeView.styled";

type Props = {
  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // formProps: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  themeProps:Record<string, string>
};

function HomeView(props: Props) {
  // const { themeProps, } = props;


  
  return (
    <>
      <S.Wrapper>
        <MainDrawer open {...props}/>
        <S.Cont component="main">
          {/* <EmptyHome /> */}
          <HintList />
        </S.Cont>
      </S.Wrapper>
      <MakeThemeModal />;
    </>
  );
}

export default HomeView;
