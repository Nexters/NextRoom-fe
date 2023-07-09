import React from "react";
import * as S from "./LoginView.styled";
import { Box, TextField } from "@mui/material";
import { LOGIN_TITLE } from "@/consts/login";

type Props = {
  formProps: Record<string, any>;
  textFieldProps: Record<string, any>;
};

const LoginView = (props: Props) => {
  const { formProps, textFieldProps } = props;

  return (
    <S.Wrapper>
      <S.Title>{LOGIN_TITLE}</S.Title>
      <Box {...formProps}>
        <TextField {...textFieldProps} />
      </Box>
    </S.Wrapper>
  );
};

export default LoginView;
