import React from "react";
import Image from "next/image";
import { TextField } from "@mui/material";

import { LOGIN, CONTECT, EMAIL } from "@/consts/components/login";

import Link from "next/link";
import Loader from "@/components/Loader/Loader";
import * as S from "./LoginView.styled";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = Record<string, any>;

function LoginView(props: Props) {
  const {
    formProps,
    adminCodeProps,
    passwordProps,
    buttonProps,
    logoProps,
    isLoading,
    errorMessage,
  } = props;

  return (
    <S.Wrapper>
      {isLoading && <Loader />}
      <Image {...logoProps} />

      <S.StyledBox {...formProps}>
        <TextField {...adminCodeProps} />
        <TextField {...passwordProps} />
        <S.LoginButtonWrapper>
          <S.ServerErrorMessage>{errorMessage}</S.ServerErrorMessage>
          <S.LoginButton {...buttonProps}>{LOGIN}</S.LoginButton>
        </S.LoginButtonWrapper>
      </S.StyledBox>

      <S.Contect>
        {CONTECT}
        <Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>
      </S.Contect>
    </S.Wrapper>
  );
}

export default LoginView;
