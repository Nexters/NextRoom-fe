/* eslint-disable */
import React from "react";
import MakeThemeModalView from "./MakeThemeModalView";
import { SubmitHandler, useForm } from "react-hook-form";
import { Grid, TextField } from "@mui/material";

function MakeThemeModal() {



  const { register, handleSubmit, resetField } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<any> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  const formProps = {
    component: "form",
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit),
  };


  const textFieldProps = [
    {
      id: "themeName",
      label: "테마 이름",
      placeholder: "입력해 주세요.",
      fullWidth :"fullWidth",
      variant: "filled",
    },
    {
      id: "hour",
      label: "시간",
      placeholder: "선택하기",
      variant: "filled"
    },
    {
      id: "minute",
      label: "분",
      placeholder: "선택하기",
      variant: "filled"
    },
  ];
  
  
  
  const TextFields = () =>
  textFieldProps.map((textField) => {

    return (
      <Grid key={textField.id}>
          <TextField
            {...textField}
            {...register(textField.id)}
            fullWidth
            />
        </Grid>
      );
    });
    
    
    
      const MakeThemeModalViewProps = {
        formProps,
        TextFields,
      };
  return <MakeThemeModalView {...MakeThemeModalViewProps}/>;
};

export default MakeThemeModal;