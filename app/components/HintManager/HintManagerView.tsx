import React from "react";
import { Button, Input } from "@mui/material";

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteButtonProps: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formProps: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  makeHintButtonProps: Record<string, any>;
  isCurrentHintActive: boolean;
  wrapperProps: { onClick: (event: React.MouseEvent) => void };
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
    isCurrentHintActive,
    wrapperProps,
  } = props;

  return (
    <S.StyledBox {...formProps}>
      <S.Wrapper selected={isCurrentHintActive}>
        <S.InputsWrapper {...wrapperProps}>
          <Input className="inputBox" {...hintCodeInputProps} />
          <Input className="inputBox" {...progressInputProps} />
          <Input className="TextareaBox" {...contentsInputProps} />
          <Input className="TextareaBox" {...answerInputProps} />
        </S.InputsWrapper>
        <S.FunctionButtonsWrapper {...wrapperProps}>
          <Button {...deleteButtonProps}>{DELETE}</Button>
          <Button {...makeHintButtonProps}>{MAKE_HINT}</Button>
        </S.FunctionButtonsWrapper>
      </S.Wrapper>
    </S.StyledBox>
  );
}

export default HintManagerView;
