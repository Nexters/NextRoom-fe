import React, { useState } from "react";
import { Stack, Grid, IconButton, Menu, MenuItem } from "@mui/material";
import { useSelectedTheme } from "@/components/atoms/selectedTheme.atom";
import { useModalState } from "@/components/atoms/modals.atom";
// eslint-disable-next-line import/no-extraneous-dependencies
import MoreVertIcon from "@mui/icons-material/MoreVert";
// eslint-disable-next-line import/no-extraneous-dependencies
import EditIcon from "@mui/icons-material/Edit";
// eslint-disable-next-line import/no-extraneous-dependencies
import DeleteIcon from "@mui/icons-material/Delete";
import HintList from "../HintList/HintList";
import * as S from "./ThemeDetail.styled";

type Props = {
  handleOpen: () => void;
};

function ThemeDetailView(props: Props) {
  const { handleOpen } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedTheme, setSelectedTheme] = useSelectedTheme();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [modalState, setModalState] = useModalState();
  const [state1, setState1] = useState(false);
  const toggleOnModalState = () => setModalState({ isOpen: true, type: "put" });

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
    setState1(!state1);
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
              <MenuItem onClick={handleMenu}>
                <DeleteIcon />
                테마삭제
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
