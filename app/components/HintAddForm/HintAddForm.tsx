import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePostHint } from "@/mutations/postHint";
import HintAddFormView from "./HintAddFormView";
import { useIsOpenAddAccordionWrite } from "../atoms/hints.atom";
import { useSelectedThemeValue } from "../atoms/selectedTheme.atom";

interface FormValues {
  progress: number;
  hintCode: string;
  contents: string;
  answer: string;
}

function HintAddForm() {
  const { register, handleSubmit } = useForm<FormValues>();
  const setAdding = useIsOpenAddAccordionWrite();
  const { mutateAsync: postHint, isSuccess } = usePostHint();
  const { id: themeId } = useSelectedThemeValue();

  useEffect(() => {
    if (isSuccess) {
      setAdding(false);
    }
  }, [isSuccess, setAdding]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { progress, hintCode, contents, answer } = data;
    if (progress && hintCode && contents && answer) {
      postHint({
        progress: Number(progress),
        hintCode,
        contents,
        answer,
        themeId,
      });
    } else {
      // TODO: add error message
      // eslint-disable-next-line no-console
      console.error("please check code");
    }
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
    max: 100,
    min: 0,
    register: { ...register("progress") },
  };

  const hintCodeInputProps = {
    placeholder: "힌트코드",
    register: { ...register("hintCode") },
  };
  const contentsInputProps = {
    placeholder: "힌트내용",
    multiline: true,
    register: { ...register("contents") },
  };
  const answerInputProps = {
    placeholder: "정답",
    multiline: true,
    register: { ...register("answer") },
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
