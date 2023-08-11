import React, { useEffect } from "react";
import { usePostHint } from "@/mutations/postHint";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelectedThemeValue } from "../atoms/selectedTheme.atom";
import MakeHintView from "./MakehintView";

type Props = { active: boolean; close: () => void };

interface FormValues {
  progress: number;
  hintCode: string;
  contents: string;
  answer: string;
}

function MakeHint(props: Props) {
  const { active, close } = props;

  const { register, handleSubmit } = useForm<FormValues>();
  const { mutateAsync: postHint, isSuccess } = usePostHint();
  const { id: themeId } = useSelectedThemeValue();

  useEffect(() => {
    if (isSuccess) {
      close();
    }
  }, [close, isSuccess]);

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
    ...register("progress"),
  };

  const hintCodeInputProps = {
    placeholder: "힌트코드",
    type: "number",
    ...register("hintCode"),
  };
  const contentsInputProps = {
    placeholder: "힌트내용",
    multiline: true,
    ...register("contents"),
  };
  const answerInputProps = {
    placeholder: "정답",
    multiline: true,
    ...register("answer"),
  };

  const deleteButtonProps = {
    variant: "text",
    onClick: close,
  };

  const makeHintButtonProps = {
    type: "submit",
    variant: "contained",
  };

  const makeHintProps = {
    answerInputProps,
    contentsInputProps,
    progressInputProps,
    hintCodeInputProps,
    formProps,
    deleteButtonProps,
    makeHintButtonProps,
  };

  if (!active) return null;

  return <MakeHintView {...makeHintProps} />;
}

export default MakeHint;
