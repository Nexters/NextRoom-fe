import React, { useEffect, useRef, useState } from "react";
import { usePostHint } from "@/mutations/postHint";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePutHint } from "@/mutations/putHint";
import { useSelectedThemeValue } from "../atoms/selectedTheme.atom";
import HintManagerView from "./HintManagerView";
import {
  useIsActiveHintItemState,
  useIsOpenDeleteDialogStateWrite,
} from "../atoms/hints.atom";
import Dialog from "../common/Dialog/Dialog";

const MAKE = "make";

type Props = {
  active: boolean;
  close: () => void;
  type: "make" | "modify";
  // eslint-disable-next-line react/require-default-props
  id?: number;
  // eslint-disable-next-line react/require-default-props
  hintData?: FormValues;
  // dialogOpen: () => void;
};

interface FormValues {
  progress: number;
  hintCode: string;
  contents: string;
  answer: string;
}

function HintManager(props: Props) {
  const { id, active, close, type, hintData } = props;
  const [open, setOpen] = useState<boolean>(false);

  const [submitDisable, setSubmitDisable] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const { mutateAsync: postHint, isSuccess: postHintSuccess } = usePostHint();
  const { mutateAsync: putHint } = usePutHint();
  const { id: themeId } = useSelectedThemeValue();
  const setIsOpenDeleteDialogState = useIsOpenDeleteDialogStateWrite();
  const formRef = useRef<HTMLFormElement>(null);
  const [isActiveHintItemState, setIsActiveHintItemState] =
    useIsActiveHintItemState();

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

  const formValue = watch();
  useEffect(() => {
    if (
      !formValue.progress ||
      !(formValue.hintCode.length === 4) ||
      !formValue.contents ||
      !formValue.answer
    ) {
      setSubmitDisable(true);
    } else {
      setSubmitDisable(false);
    }
  }, [formValue]);

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

    if (type === MAKE) {
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
    reset();
    close();
  };

  const isCurrentHintActive = isActiveHintItemState === id;

  const activateForm = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (!id) return;

    setIsActiveHintItemState(id);
    // // close();
    // setOpen(true);
  };

  const stopEvent = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const cancelInput = (event: React.MouseEvent) => {
    event.stopPropagation();
    setOpen(true);
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
    active,
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
    helperText: errors?.progress && errors?.progress.message,
    error: Boolean(errors?.progress),
    onClick: activateForm,
    ...register("progress", {
      pattern: {
        value: /^(100|[1-9][0-9]?|0)$/,
        message: "1부터 100까지의 정수만 입력 가능합니다.",
      },
    }),
  };

  const hintCodeInputProps = {
    placeholder: hintData?.hintCode || "힌트코드",
    helperText: errors?.hintCode && errors?.hintCode.message,
    type: "number",
    onClick: activateForm,
    ...register("hintCode", {
      pattern: {
        value: /^\d{4}$/,
        message: "4자리 숫자만 입력 가능합니다.",
      },
    }),
  };

  const contentsInputProps = {
    placeholder: hintData?.contents || "힌트내용",
    multiline: true,
    onClick: activateForm,
    ...register("contents"),
  };

  const answerInputProps = {
    placeholder: hintData?.answer || "정답",
    multiline: true,
    onClick: activateForm,
    ...register("answer"),
  };

  const deleteButtonProps = {
    variant: "text",
    onClick: (event: React.MouseEvent) => {
      event.stopPropagation();
      if (type === MAKE) {
        close();
      } else {
        openDeleteDialog();
      }
    },
  };

  const makeHintButtonProps = {
    type: "submit",
    variant: "contained",
    disabled: submitDisable,
    onClick: stopEvent,
  };

  const wrapperProps = {
    onClick: cancelInput,
  };

  const makeHintProps = {
    answerInputProps,
    contentsInputProps,
    progressInputProps,
    hintCodeInputProps,
    formProps,
    deleteButtonProps,
    makeHintButtonProps,
    isCurrentHintActive,
    wrapperProps,
  };

  // if (!active) return null;

  return (
    <>
      <HintManagerView {...makeHintProps} />
      <Dialog
        open={open}
        handleDialogClose={() => setOpen(false)}
        type={type === MAKE ? "hintPost" : "hintPut"}
        handleBtn={close}
      />
    </>
  );
}

export default HintManager;
