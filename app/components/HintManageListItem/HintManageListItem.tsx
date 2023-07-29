import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { usePutHint } from "@/mutations/putHint";

import HintManageListItemView from "./HintManageListItemView";
import { DeleteHintDialog } from "../DeleteHintDialog";

import { useSelectedThemeValue } from "../atoms/selectedTheme.atom";

type Props = {
  id: number;
  hintCode: string;
  contents: string;
  answer: string;
  progress: number;
};

interface FormValues {
  progress: number;
  hintCode: string;
  contents: string;
  answer: string;
}

function HintManageListItem(props: Props) {
  const { id, hintCode, contents, answer, progress } = props;

  const { mutateAsync: putHint } = usePutHint();

  const [open, setOpen] = useState<boolean>(false);
  const [submitDisable, setSubmitDisable] = useState<boolean>(true);
  const { id: themeId = 1 } = useSelectedThemeValue();

  const onDelete = () => {
    setOpen(true);
  };
  const onSave = () => {};

  const { register, handleSubmit, setValue, watch } = useForm<FormValues>();

  useEffect(() => {
    const previousValues: FormValues = { hintCode, contents, answer, progress };
    const names = Object.keys(previousValues) as (keyof FormValues)[];

    names.forEach((name) => {
      const value = previousValues[name];
      if (value) {
        setValue(name, value);
      }
    });
  }, [answer, contents, hintCode, progress, setValue]);

  useEffect(() => {
    const subscription = watch((value) => {
      const {
        progress: inputProgress = "",
        hintCode: inputHintCode = "",
        contents: inputContents = "",
        answer: inputAnswer = "",
      } = value;
      if (
        progress !== inputProgress ||
        hintCode !== inputHintCode ||
        contents !== inputContents ||
        answer !== inputAnswer
      ) {
        setSubmitDisable(false);
      } else {
        setSubmitDisable(true);
      }
    });
    return () => subscription.unsubscribe();
  }, [answer, contents, hintCode, progress, watch]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    putHint({ ...data, id });
  };

  const formProps = {
    key: id,
    component: "form",
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit),
  };

  const progressInputProps = {
    placeholder: progress || "진행률",
    type: "number",
    register: { ...register("progress") },
  };

  const hintCodeInputProps = {
    placeholder: hintCode || "힌트코드",
    register: { ...register("hintCode") },
  };
  const contentsInputProps = {
    placeholder: contents || "힌트내용",
    multiline: true,
    register: { ...register("contents") },
  };
  const answerInputProps = {
    placeholder: answer || "정답",
    multiline: true,
    register: { ...register("answer") },
  };

  const saveButtonProps = {
    variant: "contained",
    disabled: submitDisable,
    onClick: onSave,
    type: "submit",
  };

  const HintManageListItemProps = {
    id,
    contents,
    onDelete,
    progressInputProps,
    contentsInputProps,
    hintCodeInputProps,
    answerInputProps,
    formProps,
    saveButtonProps,
  };

  return (
    <>
      <HintManageListItemView {...HintManageListItemProps} />
      <DeleteHintDialog
        open={open}
        handleClose={() => setOpen(false)}
        id={themeId}
      />
    </>
  );
}

export default HintManageListItem;
