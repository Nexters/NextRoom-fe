import React, { useEffect } from "react";
import { Typography, Button, Grid, Stack } from "@mui/material";
import { useThemeState } from "@/components/atoms/theme.atom";
import { useModalState } from "@/components/atoms/modals.atom";
// eslint-disable-next-line import/no-extraneous-dependencies
import AccessTimeIcon from "@mui/icons-material/AccessTime";
// eslint-disable-next-line import/no-extraneous-dependencies
import ContactsIcon from "@mui/icons-material/Contacts";
// eslint-disable-next-line import/no-extraneous-dependencies
import EditIcon from "@mui/icons-material/Edit";
// eslint-disable-next-line import/no-extraneous-dependencies

import { HintManage } from "@/components/HintManage";
import * as S from "./ThemeDetail.styled";

function ThemeDetailView() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [themeState, setThemeState] = useThemeState();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [modalState, setModalState] = useModalState();
  const toggleOnModalState = () => setModalState({isOpen:true, type: "put"});
  
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(themeState);
  }, [themeState]);

  return (
    <S.Wrapper>
      <Stack spacing={4}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <S.Title>테마정보</S.Title>

          <Button onClick={toggleOnModalState} startIcon={<EditIcon />}>
            <Typography>테마 정보 수정하기</Typography>
          </Button>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid container>
            <Grid item xs={6}>
              <Stack spacing={2} direction="row" alignItems="center">
                <Button>
                  <ContactsIcon />
                </Button>
                <S.MiddleTitle>테마이름</S.MiddleTitle>
                <Typography>{themeState.title}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={2} direction="row" alignItems="center">
                <Button>
                  <AccessTimeIcon />
                </Button>
                <S.MiddleTitle>탈출 제한 시간</S.MiddleTitle>
                <Stack direction="row" alignItems="center">
                  <Typography>{themeState.timeLimit}</Typography>
                  <Typography>분</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
        <HintManage />
      </Stack>
    </S.Wrapper>
  );
}

export default ThemeDetailView;
