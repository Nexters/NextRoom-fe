import React from "react";
import * as S from "./HomeView.styled";
import { Box } from "@mui/material";
import MainDrawer from "@/components/common/Drawer/Drawer";
import MakeThemeModal from "@/components/MakeThemeModal/MakeThemeModal";
import EmptyHome from "@/components/common/EmptyHome/EmptyHome";



function HomeView(props: Props) {

  
  return (
 <>
    <Box
      sx={{
        display: "flex",
        backgroundColor: "var(--m-3-sys-light-surface-container-low, #F7F2FA)",
      }}
    >
      <MainDrawer open >hello</MainDrawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <EmptyHome />
        {/* <HintList/> */}
      </Box>
    </Box>
    <MakeThemeModal />;
</>
  );
}

export default HomeView;
