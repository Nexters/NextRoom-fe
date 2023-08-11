import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { usePutHint } from "@/mutations/putHint";

import HintItemView from "./HintItemView";

type Props = {
  id: number;
  hintCode: string;
  contents: string;
  answer: string;
  progress: number;
  openDeleteModal: () => void;
};

interface FormValues {
  progress: number;
  hintCode: string;
  contents: string;
  answer: string;
}

function HintItem(props: Props) {
  const { id, hintCode, contents, answer, progress, openDeleteModal } = props;

  const { mutateAsync: putHint } = usePutHint();

  const [submitDisable, setSubmitDisable] = useState<boolean>(true);

  const onDelete = () => {
    openDeleteModal();
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
    key: id,
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

  return <HintItemView {...HintManageListItemProps} />;
}

export default HintItem;
