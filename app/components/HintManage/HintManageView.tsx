import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button, Stack, Typography } from "@mui/material";
import * as S from "./HintManageView.styled";
import { HintManageList } from "../HintManageList";

const MANAGE_HINT = "힌트 관리";
const ADD_NEW_HINT = "새로운 힌트 추가하기";

function HintManageView() {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <S.Title>{MANAGE_HINT}</S.Title>

        <Button startIcon={<AddIcon />}>
          <Typography>{ADD_NEW_HINT}</Typography>
        </Button>
      </Stack>
      <Stack>
        <HintManageList />
      </Stack>
    </>
  );
}

export default HintManageView;
