import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { LOGIN_TITLE } from "@/consts/login";
import * as S from "./LoginView.styled";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formProps: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  textFieldProps: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  buttonProps: Record<string, any>;
};

function LoginView(props: Props) {
  const { formProps, textFieldProps, buttonProps } = props;

  return (
    <S.Wrapper>
      <S.Title>{LOGIN_TITLE}</S.Title>
      <Box {...formProps}>
        <TextField {...textFieldProps} />
        <Button {...buttonProps}>로그인</Button>
      </Box>
    </S.Wrapper>
  );
}

export default LoginView;
