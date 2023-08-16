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
  activateForm: boolean;
  stopEvent: (event: React.MouseEvent) => void;
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
    activateForm,
    stopEvent,
  } = props;

  return (
    <Box {...formProps}>
      <S.Wrapper active={activateForm}>
        <S.InputsWrapper>
          <Input
            className="inputBox"
            onClick={stopEvent}
            {...hintCodeInputProps}
          />
          <Input
            className="inputBox"
            onClick={stopEvent}
            {...progressInputProps}
          />
          <Input
            className="TextareaBox"
            onClick={stopEvent}
            {...contentsInputProps}
          />
          <Input
            className="TextareaBox"
            onClick={stopEvent}
            {...answerInputProps}
          />
        </S.InputsWrapper>
        <S.FunctionButtonsWrapper onClick={stopEvent}>
          <Button {...deleteButtonProps}>{DELETE}</Button>
          <Button {...makeHintButtonProps}>{MAKE_HINT}</Button>
        </S.FunctionButtonsWrapper>
      </S.Wrapper>
    </Box>
  );
}

export default HintManagerView;
