import React from "react";
import { useForm } from "react-hook-form";
import HintAddFormView from "./HintAddFormView";
import { useIsOpenAddAccordionWrite } from "../atoms/hints.atom";

interface FormValues {
  progress: string;
  hintCode: string;
  contents: string;
  answer: string;
}

function HintAddForm() {
  const { register, handleSubmit } = useForm<FormValues>();
  const setAdding = useIsOpenAddAccordionWrite();

  const onSubmit = () => {
    console.log("run");
  };

  const formProps = {
    component: "form",
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit),
  };

  const progressInputProps = {
    placeholder: "진행률",
    type: "number",
    ...register("progress", { required: true }),
  };

  const hintCodeInputProps = {
    placeholder: "힌트코드",
    ...register("hintCode", { required: true }),
  };
  const contentsInputProps = {
    placeholder: "힌트내용",
    multiline: true,
    ...register("contents", { required: true }),
  };
  const answerInputProps = {
    placeholder: "정답",
    multiline: true,
    ...register("answer", { required: true }),
  };

  const deleteButtonProps = {
    onClick: () => setAdding(false),
  };

  const makeHintButtonProps = {
    type: "submit",
    variant: "contained",
  };

  const hintAddFormProps = {
    answerInputProps,
    contentsInputProps,
    progressInputProps,
    hintCodeInputProps,
    formProps,
    deleteButtonProps,
    makeHintButtonProps,
  };

  return <HintAddFormView {...hintAddFormProps} />;
}

export default HintAddForm;
