import React, { useEffect } from "react";
import * as S from "./MakeHintModalView.styled";
import { Button, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

type Props = {};

const MakeHintModalView = (props: Props) => {
  const formProps = {
    component: "form",
    noValidate: true,
    autoComplete: "off",
    onSubmit: () => {},
  };
  const { register, handleSubmit, formState } = useForm();

  const textFieldProps = [
    {
      id: "hintName",
      label: "힌트 제목(필수)",
      placeholder: "입력해 주세요.",
      helperText: "관리를 위한 코드를 입력해 주세요.",
    },
    {
      id: "code",
      label: "코드(필수)",
      placeholder: "입력해 주세요.",
      helperText: "문제에 해당하는 코드를 입력해 주세요.",
    },
    {
      id: "progress",
      label: "진행률(필수)",
      placeholder: "입력해 주세요.",
      helperText: "tip: 10%, 70% 등 진행률을 입력해 주세요.",
      type: "number",
    },
    {
      id: "description",
      label: "힌트 설명(필수)",
      placeholder: "입력해 주세요.",
    },
    {
      id: "answer",
      label: "정답",
      placeholder: "입력해 주세요.",
    },
  ];

  const TextFields = () => {
    return textFieldProps.map((props) => {
      const customMargin =
        props.id === "description" || props.id === "answer"
          ? { margin: "0 0 50px 0" }
          : {};
      return (
        <S.GridItem {...customMargin}>
          <TextField
            {...props}
            {...register(props.id)}
            fullWidth
            key={props.id}
          />
        </S.GridItem>
      );
    });
  };

  return (
    <S.Container>
      <S.Title>힌트 만들기</S.Title>
      <S.ContentsWrapper>
        <Grid direction="column">
          <TextFields />
          <S.ContentsWrapper>
            <Button variant="contained">힌트 작성 완료</Button>
          </S.ContentsWrapper>
        </Grid>
      </S.ContentsWrapper>
    </S.Container>
  );
};

export default MakeHintModalView;
