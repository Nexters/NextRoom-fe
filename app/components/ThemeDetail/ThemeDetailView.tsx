import React, { useEffect } from "react";
import { Stack, Grid, IconButton } from "@mui/material";
import { useSelectedTheme } from "@/components/atoms/selectedTheme.atom";
import { useModalState } from "@/components/atoms/modals.atom";
// eslint-disable-next-line import/no-extraneous-dependencies
import MoreVertIcon from "@mui/icons-material/MoreVert";
// eslint-disable-next-line import/no-extraneous-dependencies
import EditIcon from "@mui/icons-material/Edit";
// eslint-disable-next-line import/no-extraneous-dependencies
import { HintManage } from "@/components/HintManage";
import * as S from "./ThemeDetail.styled";

function ThemeDetailView() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedTheme, setSelectedTheme] = useSelectedTheme();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [modalState, setModalState] = useModalState();
  const toggleOnModalState = () => setModalState({ isOpen: true, type: "put" });

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(selectedTheme);
  }, [selectedTheme]);

  return (
    <S.Wrapper>
      <Stack spacing={4}>
        <S.Title>{selectedTheme.title}</S.Title>

        <Stack spacing={2} direction="row" alignItems="center">
          <S.MiddleTitle>탈출 제한 시간</S.MiddleTitle>
          <S.MiddleTitle>{selectedTheme.timeLimit}분</S.MiddleTitle>
        </Stack>
        <Grid container spacing={1}>
          <Grid item>
            <S.UpdateButton
              onClick={toggleOnModalState}
              startIcon={<EditIcon />}
            >
              테마 정보 수정
            </S.UpdateButton>
          </Grid>
          <Grid item>
            <IconButton color="primary" aria-label="delete">
              <MoreVertIcon />
            </IconButton>
          </Grid>
        </Grid>
        <HintManage />
      </Stack>
    </S.Wrapper>
  );
}

export default ThemeDetailView;
