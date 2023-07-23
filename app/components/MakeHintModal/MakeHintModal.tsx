import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Clear } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";

import MakeHintModalView from "./MakeHintModalView";
import { MakeTypeModalProps } from "./MakeHintModal.type";
import * as S from "./MakeHintModalView.styled";

function MakeHintModal(props: MakeTypeModalProps) {
  const { open = false, handleClose = () => {}, id = "" } = props;

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

  const TextFields = () =>
    textFieldProps.map((textField) => {
      const customMargin =
        textField.id === "description" || textField.id === "answer"
          ? { margin: "0 0 50px 0" }
          : {};
      return (
        <S.GridItem {...customMargin} key={textField.id}>
          <TextField
            {...textField}
            {...register(textField.id)}
            fullWidth
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => resetField(textField.id)}>
                  <Clear />
                </IconButton>
              ),
            }}
          />
        </S.GridItem>
      );
    });

  return (
    <MakeHintModalView
      id={id}
      open={open}
      formProps={formProps}
      TextFields={TextFields}
      handleClose={handleClose}
    />
  );
}

export default MakeHintModal;
