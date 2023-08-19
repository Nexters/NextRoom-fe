import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePostTheme } from "@/mutations/postTheme";
import { usePutTheme } from "@/mutations/putTheme";
import { useSelectedTheme } from "@/components/atoms/selectedTheme.atom";
import { useModalStateValue } from "@/components/atoms/modals.atom";
import MakeThemeModalView from "./MakeThemeModalView";

function MakeThemeModal() {
  interface FormValues {
    id: number | undefined;
    title: string;
    timeLimit: number;
    hintLimit: number;
  }

  interface TimeItem {
    label: string;
    minute: number;
  }

  const modalState = useModalStateValue();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedTheme, setSelectedTheme] = useSelectedTheme();
  const { register, handleSubmit, setValue } = useForm<FormValues>();

  useEffect(() => {
    if (modalState.type === "put") {
      setValue("title", selectedTheme.title);
      setValue("timeLimit", selectedTheme.timeLimit);
      setValue("hintLimit", selectedTheme.hintLimit);
    } else {
      setValue("title", "");
      setValue("timeLimit", 0);
      setValue("hintLimit", 0);
    }
  }, [selectedTheme, setValue, modalState.type]);

  const { mutateAsync: postTheme } = usePostTheme();
  const { mutateAsync: putTheme } = usePutTheme();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const submitData = {
      id: selectedTheme.id,
      title: data.title,
      timeLimit: data.timeLimit,
      hintLimit: data.hintLimit,
    };

    if (modalState.type === "put") {
      putTheme(submitData);
    } else {
      postTheme(data);
    }
  };

  const formProps = {
    component: "form",
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit),
  };

  const timeOption: TimeItem[] = [
    { label: "60", minute: 60 },
    { label: "90", minute: 90 },
    { label: "120", minute: 120 },
  ];

  const themeNameProps = {
    id: "title",
    label: "테마 이름",
    placeholder: "입력해 주세요.",
    message: "손님에게는 보이지 않아요.",
    ...register("title"),
  };
  const timeLimitProps = {
    id: "timeLimit",
    label: "시간",
    placeholder: "선택하기",
    type: "number",
    message: "손님이 사용할 타이머에 표시됩니다. (분 단위로 입력해 주세요.)",
    ...register("timeLimit"),
  };
  const hintLimitProps = {
    id: "hintLimit",
    label: "힌트갯수",
    placeholder: "선택하기",
    type: "number",
    message: "손님이 사용할 흰트갯수가 표시됩니다.",
    ...register("hintLimit"),
  };

  const MakeThemeModalViewProps = {
    formProps,
    themeNameProps,
    timeLimitProps,
    hintLimitProps,
    timeOption,
  };

  return <MakeThemeModalView {...MakeThemeModalViewProps} />;
}

export default MakeThemeModal;
