import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Grid, TextField } from "@mui/material";
import { usePostTheme } from "@/mutations/postTheme";
import MakeThemeModalView from "./MakeThemeModalView";

function MakeThemeModal() {
  interface FormValues {
    title: string;
    timeLimit: number;
  }

  const { mutateAsync: postTheme } = usePostTheme();

  const { handleSubmit } = useForm<FormValues>();

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
    },
    {
      id: "timeLimit",
      label: "시간",
      placeholder: "선택하기",
    },
  ];

  const TextFields = () =>
    textFieldProps.map((textField) => (
      <Grid key={textField.id}>
        <TextField {...textField} fullWidth />
      </Grid>
    ));

  const MakeThemeModalViewProps = {
    formProps,
    TextFields,
  };

  return <MakeThemeModalView {...MakeThemeModalViewProps} />;
}

export default MakeThemeModal;
