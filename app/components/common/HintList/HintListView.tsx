import React, { useEffect } from "react";
import { Typography, Button, Grid, Stack } from "@mui/material";
import { useThemeState } from "@/components/atoms/theme.atom";
import { useModalState } from "@/components/atoms/modals.atom";
// eslint-disable-next-line import/no-extraneous-dependencies
import AccessTimeIcon from "@mui/icons-material/AccessTime";
// eslint-disable-next-line import/no-extraneous-dependencies
import EditIcon from "@mui/icons-material/Edit";
// eslint-disable-next-line import/no-extraneous-dependencies
import AddIcon from "@mui/icons-material/Add";

import { Hints } from "@/queries/getHintList";
import * as S from "./HintListView.styled";

interface Props {
  hintList: Hints;
}

function HintListView(props: Props) {
  const { hintList } = props;

  // eslint-disable-next-line no-console
  console.log({ hintList });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [themeState, setThemeState] = useThemeState();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [modalState, setModalState] = useModalState();
  const toggleOnModalState = () => setModalState(true);
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
                  <AccessTimeIcon />
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
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <S.Title>힌트관리</S.Title>

          <Button onClick={toggleOnModalState} startIcon={<AddIcon />}>
            <Typography>새로운 힌트 추가하기</Typography>
          </Button>
        </Stack>
      </Stack>
    </S.Wrapper>
  );
}

export default HintListView;
