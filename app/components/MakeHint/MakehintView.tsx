import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { ChatBubbleOutline, Code, Done, Water } from "@mui/icons-material";

import * as S from "./MakeHintView.styled";
import { ActiveInput } from "../common";
import { ActiveInputProps } from "../common/ActiveInput/ActiveInput";

interface Props {
  progressInputProps: ActiveInputProps;
  hintCodeInputProps: ActiveInputProps;
  contentsInputProps: ActiveInputProps;
  answerInputProps: ActiveInputProps;
  deleteButtonProps: { onClick: () => void };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formProps: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  makeHintButtonProps: Record<string, any>;
}

const DELETE = "삭제하기";
const MAKE_HINT = "힌트 만들기";

function MakeHintView(props: Props) {
  const {
    progressInputProps,
    hintCodeInputProps,
    contentsInputProps,
    answerInputProps,
    deleteButtonProps,
    makeHintButtonProps,
    formProps,
  } = props;

  return (
    <Box {...formProps}>
      <Accordion key="add" expanded>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography color="inherit">
            <S.SummaryStack direction="row">
              <Stack direction="row">
                <S.CodeProgressWrapper>
                  <S.IconText>
                    <Water />
                    <ActiveInput {...progressInputProps} />
                  </S.IconText>
                  <S.IconText>
                    <Code />
                    <ActiveInput {...hintCodeInputProps} />
                  </S.IconText>
                </S.CodeProgressWrapper>
              </Stack>
            </S.SummaryStack>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="inherit">
            <S.DetailIconText>
              <ChatBubbleOutline />
              <ActiveInput {...contentsInputProps} />
            </S.DetailIconText>
            <S.DetailIconText>
              <Done />
              <ActiveInput {...answerInputProps} />
            </S.DetailIconText>
          </Typography>
          <S.ButtonsStack direction="row" spacing={3}>
            <S.CancelButton {...deleteButtonProps}>{DELETE}</S.CancelButton>
            <Button {...makeHintButtonProps}>{MAKE_HINT}</Button>
          </S.ButtonsStack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default MakeHintView;
