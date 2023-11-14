import React, { useState } from "react";
import { Stack, Grid, IconButton, Menu, MenuItem } from "@mui/material";
import { useSelectedThemeValue } from "@/components/atoms/selectedTheme.atom";
import { useModalStateWrite } from "@/components/atoms/modals.atom";
import { useActiveHintStateValue } from "@/components/atoms/activeHint.atom";
// eslint-disable-next-line import/no-extraneous-dependencies
import MoreVertIcon from "@mui/icons-material/MoreVert";
// eslint-disable-next-line import/no-extraneous-dependencies
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/navigation";
import HintList from "../HintList/HintList";

import * as S from "./ThemeDetail.styled";

type Props = {
  handleOpen: () => void;
  handleDialogOpen: () => void;
};

function ThemeDetailView(props: Props) {
  const { handleOpen, handleDialogOpen } = props;
  const selectedTheme = useSelectedThemeValue();
  const setModalState = useModalStateWrite();
  const activeHint = useActiveHintStateValue();
  const router = useRouter();
  const [menuState, setMenuState] = useState(false);
  const toggleOnModalState = () => {
    if (activeHint.isOpen) {
      handleDialogOpen();
    } else {
      router.push("/theme");
      setModalState({ isOpen: true, type: "put" });
    }
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
    setMenuState(!menuState);
  };

  const handleMenu = () => {
    handleOpen();
    closeMenu();
  };

  return (
    <S.Wrapper>
      <Stack spacing={2}>
        <S.Title>{selectedTheme.title}</S.Title>

        <Stack spacing={1} direction="row" alignItems="center">
          <S.MiddleTitle>탈출 제한 시간</S.MiddleTitle>
          <S.MiddleTitle>{selectedTheme.timeLimit}분</S.MiddleTitle>
          <S.MiddleTitle>•</S.MiddleTitle>
          <S.MiddleTitle>사용 가능 힌트</S.MiddleTitle>
          <S.MiddleTitle>{selectedTheme.hintLimit}개</S.MiddleTitle>
        </Stack>
        <Grid container spacing={1} rowSpacing={3} alignItems="center">
          <Grid item>
            <S.UpdateButton
              variant="outlined"
              onClick={toggleOnModalState}
              startIcon={<EditIcon />}
            >
              테마 정보 수정
            </S.UpdateButton>
          </Grid>
          <Grid item>
            <IconButton
              size="large"
              color="inherit"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={openMenu}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="download-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={closeMenu}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={handleMenu}
                sx={{
                  width: "200px",
                  // height: "56px",
                  backgroundColor: "#211F26",
                }}
              >
                <DeleteIcon sx={{ marginRight: "12px" }} />
                테마 삭제
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
        <HintList />
      </Stack>
    </S.Wrapper>
  );
}

export default ThemeDetailView;
