import React from "react";
import { Box, TextField } from "@mui/material";
import { LOGIN_TITLE } from "@/consts/login";
import Image from "next/image";
import * as S from "./LoginView.styled";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = Record<string, any>;

function LoginView(props: Props) {
  const { formProps, textFieldProps, buttonProps, logoProps } = props;

  return (
    <S.Wrapper>
      <Image {...logoProps} />
      <S.Title>{LOGIN_TITLE}</S.Title>
      <Box {...formProps}>
        <TextField {...textFieldProps} />
        <S.LoginButton {...buttonProps}>로그인</S.LoginButton>
      </Box>
    </S.Wrapper>
  );
}

export default LoginView;
