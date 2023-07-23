/* eslint-disable */
import React from "react";
import MakeThemeModalView from "./MakeThemeModalView";
import { SubmitHandler, useForm } from "react-hook-form";
import { Grid, TextField } from "@mui/material";
import { usePostTheme } from "@/mutations/postTheme";

function MakeThemeModal() {
  interface FormValues {
    title: string;
    timeLimit: number;
  }
  

  const { mutateAsync: postTheme } = usePostTheme();

  const { register, handleSubmit } = useForm<FormValues>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const submitData = { ...data, timeLimit: parseInt(data.timeLimit) };

    // eslint-disable-next-line no-console
    console.log(submitData);
    postTheme(data);
  };

  const formProps = {
    component: "form",
    noValidate: true,
    autoComplete: "off",
    onSubmit: () => {},
  };



  const textFieldProps = [
    {
      id: "title",
      label: "테마 이름",
      placeholder: "입력해 주세요.",
      fullWidth :"fullWidth",
      variant: "filled",
    },
    {
      id: "timeLimit",
      label: "시간",
      placeholder: "선택하기",
      variant: "filled"
    },
  ];

  const MakeThemeModalViewProps = {
    formProps,
    textFieldProps,
  };

  return <MakeThemeModalView {...MakeThemeModalViewProps}/>;
};

export default MakeThemeModal;