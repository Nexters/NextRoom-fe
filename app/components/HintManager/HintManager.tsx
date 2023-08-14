import React, { useEffect, useRef } from "react";
import { usePostHint } from "@/mutations/postHint";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePutHint } from "@/mutations/putHint";
import { useSelectedThemeValue } from "../atoms/selectedTheme.atom";
import HintManagerView from "./HintManagerView";
import {
  useIsActiveHintItemState,
  useIsOpenDeleteDialogStateWrite,
} from "../atoms/hints.atom";

type Props = {
  active: boolean;
  close: () => void;
  type: "make" | "modify";
  // eslint-disable-next-line react/require-default-props
  id?: number;
  // eslint-disable-next-line react/require-default-props
  hintData?: FormValues;
};

interface FormValues {
  progress: number;
  hintCode: string;
  contents: string;
  answer: string;
}

function HintManager(props: Props) {
  const { id, active, close, type, hintData } = props;

  const { register, handleSubmit, setValue, watch } = useForm<FormValues>();
  const { mutateAsync: postHint, isSuccess: postHintSuccess } = usePostHint();
  const { mutateAsync: putHint } = usePutHint();
  const { id: themeId } = useSelectedThemeValue();
  const setIsOpenDeleteDialogState = useIsOpenDeleteDialogStateWrite();
  const formRef = useRef<HTMLFormElement>(null);
  const [isActiveHintItemState, setIsActiveHintItemState] =
    useIsActiveHintItemState();

  useEffect(() => {
    if (postHintSuccess) {
      close();
    }
  }, [close, postHintSuccess]);

  useEffect(() => {
    if (!hintData) return;
    const { progress, hintCode, contents, answer } = hintData;

    const previousValues: FormValues = { hintCode, contents, answer, progress };
    const names = Object.keys(previousValues) as (keyof FormValues)[];

    names.forEach((name) => {
      const value = previousValues[name];
      if (value) {
        setValue(name, value);
      }
    });
  }, [hintData, setValue]);

  useEffect(() => {
    if (!hintData) return;
    const { progress, hintCode, contents, answer } = hintData;

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
        // setSubmitDisable(false);
      } else {
        // setSubmitDisable(true);
      }
    });
    // eslint-disable-next-line consistent-return
    return () => subscription.unsubscribe();
  }, [hintData, watch]);

  const openDeleteDialog = () => {
    if (!id) return;
    setIsOpenDeleteDialogState({ isOpen: true, id });
  };

  const key = `${type}-${id}`;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { progress, hintCode, contents, answer } = data;

    if (!(progress && hintCode && contents && answer)) {
      // TODO: add error message
      // eslint-disable-next-line no-console
      console.error("please check code");
      return;
    }

    if (type === "make") {
      postHint({
        progress: Number(progress),
        hintCode,
        contents,
        answer,
        themeId,
      });
    } else {
      putHint({
        progress: Number(progress),
        hintCode,
        contents,
        answer,
        id: Number(id),
      });
    }
  };

  const isCurrentHintActive = isActiveHintItemState === id;

  const activateForm = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (!id) return;
    setIsActiveHintItemState(id);
  };

  const deactivateForm = (event: MouseEvent) => {
    const isOutsideForm =
      formRef.current && !formRef.current.contains(event.target as Node);

    if (isOutsideForm && isCurrentHintActive) {
      setIsActiveHintItemState(0);
    }
  };

  useEffect(() => {
    document.addEventListener("click", deactivateForm);

    return () => {
      document.removeEventListener("click", deactivateForm);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formProps = {
    key,
    component: "form",
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit),
    onClick: activateForm,
    ref: formRef,
  };

  const progressInputProps = {
    placeholder: hintData?.progress || "진행률",
    type: "number",
    ...register("progress"),
  };

  const hintCodeInputProps = {
    placeholder: hintData?.hintCode || "힌트코드",
    type: "number",
    ...register("hintCode"),
  };
  const contentsInputProps = {
    placeholder: hintData?.contents || "힌트내용",
    multiline: true,
    ...register("contents"),
  };
  const answerInputProps = {
    placeholder: hintData?.answer || "정답",
    multiline: true,
    ...register("answer"),
  };

  const deleteButtonProps = {
    variant: "text",
    onClick: type === "make" ? close : openDeleteDialog,
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
    activateForm: isCurrentHintActive,
  };

  if (!active) return null;

  return <HintManagerView {...makeHintProps} />;
}

export default HintManager;
