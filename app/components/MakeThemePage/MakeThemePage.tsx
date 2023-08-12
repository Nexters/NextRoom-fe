import React, { useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePostTheme } from "@/mutations/postTheme";
import { usePutTheme } from "@/mutations/putTheme";
import { useSelectedTheme } from "@/components/atoms/selectedTheme.atom";
import { useModalState } from "@/components/atoms/modals.atom";
import { CancelDialog } from "@/components/CancelDialog";
import MakeThemeModalView from "./MakeThemePageView";

interface FormValues {
  id: number | undefined;
  title: string;
  timeLimit: number;
  hintLimit: number;
}

function MakeThemePage() {
  const [modalState, setModalState] = useModalState();
  const [open, setOpen] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedTheme, setSelectedTheme] = useSelectedTheme();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const formValue = watch();
  const handleClose=()=>{
    setOpen(!open)
  }
  useEffect(() => {
    reset();
    if (modalState.type === "put") {
      setValue("title", selectedTheme.title);
      setValue("timeLimit", selectedTheme.timeLimit);
      setValue("hintLimit", selectedTheme.hintLimit);
    }
  }, [selectedTheme, setValue, modalState.type, reset]);

  const { mutateAsync: postTheme } = usePostTheme();
  const { mutateAsync: putTheme } = usePutTheme();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Submitting", data);

    const submitData = {
      id: selectedTheme.id,
      title: data.title,
      timeLimit: data.timeLimit,
      hintLimit: data.hintLimit,
    };

    if (modalState.type === "put") {
      putTheme(submitData);
      setModalState({ ...modalState, isOpen: false });
    } else {
      postTheme(data);
      setModalState({ ...modalState, isOpen: false });
    }
  };

  const formProps = {
    component: "form",
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit),
  };

  const themeNameProps = {
    id: "title",
    label: "테마 이름",
    placeholder: "입력해 주세요.",
    message: "손님에게는 보이지 않아요.",
    ...register("title", { required: "테마 이름은 필수 값 입니다" }),
  };
  const timeLimitProps = {
    id: "timeLimit",
    label: "시간",
    placeholder: "선택하기",
    type: "number",
    message: "손님이 사용할 타이머에 표시됩니다. (분 단위로 입력해 주세요.)",
    ...register("timeLimit", {
      required: "시간을 입력해주세요.",
      pattern: {
        value: /^[1-9]\d*$/,
        message: "1분 이상으로 입력해 주세요.",
      },
    }),
  };
  const hintLimitProps = {
    id: "hintLimit",
    label: "힌트갯수",
    type: "number",
    message: "손님이 사용할 힌트갯수입니다.",
    ...register("hintLimit", {
      required: "갯수를 입력해주세요.",
      pattern: {
        value: /^[1-9]\d*$/,
        message: "1개 이상으로 입력해 주세요.",
      },
    }),
  };

  const MakeThemeModalViewProps = {
    handleClose,
    formValue,
    modalState,
    formProps,
    themeNameProps,
    timeLimitProps,
    hintLimitProps,
    titleError: errors.title,
    timeLimitError: errors.timeLimit,
    hintLimitError: errors.hintLimit,
  };

  return (
    <>
      <MakeThemeModalView {...MakeThemeModalViewProps} />
      <CancelDialog
        open={open}
        handleClose={() => setOpen(false)}
        handleModalClose={() => setModalState({ ...modalState, isOpen: false })}
      />
    </>
  );
}

export default MakeThemePage;
