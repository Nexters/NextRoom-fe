import React, { useEffect, useState } from "react";
import {
  Stack,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Snackbar,
  Box,
} from "@mui/material";
import { useSelectedTheme } from "@/components/atoms/selectedTheme.atom";
import { useModalState } from "@/components/atoms/modals.atom";
// eslint-disable-next-line import/no-extraneous-dependencies
import MoreVertIcon from "@mui/icons-material/MoreVert";
// eslint-disable-next-line import/no-extraneous-dependencies
import EditIcon from "@mui/icons-material/Edit";
// eslint-disable-next-line import/no-extraneous-dependencies
import DeleteIcon from "@mui/icons-material/Delete";
import { HintManage } from "@/components/HintManage";
import { useDeleteTheme } from "@/mutations/deleteTheme";
import * as S from "./ThemeDetail.styled";

function ThemeDetailView() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedTheme, setSelectedTheme] = useSelectedTheme();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [modalState, setModalState] = useModalState();
  const [state, setState] = useState(false);
  const [state1, setState1] = useState(false);
  const toggleOnModalState = () => setModalState({ isOpen: true, type: "put" });
  const { mutateAsync: deleteTheme } = useDeleteTheme();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(selectedTheme);
  }, [selectedTheme]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
    setState1(!state1);
  };
  const handleClose = () => {
    setState(!state);
  };

  const handleMenu = () => {
    setState(!state);
    deleteTheme({ id: selectedTheme.id });
    closeMenu();
  };

  return (
    <S.Wrapper>
      <Stack spacing={2}>
        <S.Title>{selectedTheme.title}</S.Title>

        <Stack spacing={1} direction="row" alignItems="center">
          <S.MiddleTitle>탈출 제한 시간</S.MiddleTitle>
          <S.MiddleTitle>{selectedTheme.timeLimit}분</S.MiddleTitle>
        </Stack>
        <Grid container rowSpacing={3} alignItems="center">
          <Grid item>
            <S.UpdateButton
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
              <MenuItem onClick={handleMenu}>
                <DeleteIcon />
                테마삭제
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
        <HintManage />
      </Stack>
      <Box sx={{ width: 500 }}>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={state}
          onClose={handleClose}
          message="테마를 삭제했습니다.  단말기에서 업데이트를 진행해 주세요."
          key="bottomleft"
        />
      </Box>
    </S.Wrapper>
  );
}

export default ThemeDetailView;
