import React from "react";
import { Box, Button, Input } from "@mui/material";

import * as S from "./HintManagerView.styled";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  progressInputProps: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hintCodeInputProps: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  contentsInputProps: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  answerInputProps: Record<string, any>;
  deleteButtonProps: { onClick: () => void };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formProps: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  makeHintButtonProps: Record<string, any>;
}

const DELETE = "삭제하기";
const MAKE_HINT = "저장하기";

function HintManagerView(props: Props) {
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
      <S.Wrapper>
        <S.InputsWrapper>
          <Input className="inputBox" {...hintCodeInputProps} />
          <Input className="inputBox" {...progressInputProps} />
          <Input className="TextareaBox" {...contentsInputProps} />
          <Input className="TextareaBox" {...answerInputProps} />
        </S.InputsWrapper>
        <S.FunctionButtonsWrapper>
          <Button {...deleteButtonProps}>{DELETE}</Button>
          <Button {...makeHintButtonProps}>{MAKE_HINT}</Button>
        </S.FunctionButtonsWrapper>
      </S.Wrapper>
    </Box>
  );
}

export default HintManagerView;
