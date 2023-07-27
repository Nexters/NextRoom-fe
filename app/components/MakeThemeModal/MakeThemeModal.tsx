import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Grid, TextField } from "@mui/material";
import { usePostTheme } from "@/mutations/postTheme";
import MakeThemeModalView from "./MakeThemeModalView";
import * as S from "./MakeThemeModalView.styled";

function MakeThemeModal() {
  interface FormValues {
    title: string;
    timeLimit: number;
  }

  const { register, handleSubmit } = useForm<FormValues>();
  const { mutateAsync: postTheme } = usePostTheme();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const submitData = { ...data, timeLimit: data.timeLimit };

    // eslint-disable-next-line no-console
    console.log(submitData);
    postTheme(data);
  };

  const formProps = {
    component: "form",
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit),
  };

  const textFieldProps = [
    {
      id: "title",
      label: "테마 이름",
      placeholder: "입력해 주세요.",
      message: "손님에게는 보이지 않아요.",
      ...register("title"),
      // variant: "filled",
    },
    {
      id: "timeLimit",
      label: "시간",
      placeholder: "선택하기",
      type: "number",
      message: "손님이 사용할 타이머에 표시됩니다. (분 단위로 입력해 주세요.)",
      ...register("timeLimit"),
      // variant: "filled",
    },
  ];

  const TextFields = () =>
    textFieldProps.map((textField) => (
      <Grid key={textField.id}>
        <TextField {...textField}  fullWidth />
        <S.Description>{textField.message}</S.Description>
      </Grid>
    ));

  const MakeThemeModalViewProps = {
    formProps,
    TextFields,
  };

  return <MakeThemeModalView {...MakeThemeModalViewProps} />;
}

export default MakeThemeModal;
