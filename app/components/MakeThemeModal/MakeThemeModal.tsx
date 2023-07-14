/* eslint-disable */
import React from "react";
import MakeThemeModalView from "./MakeThemeModalView";

type Props = {};

const MakeThemeModal = (props: Props) => {
  
  const formProps = {
    component: "form",
    noValidate: true,
    autoComplete: "off",
    onSubmit: () => {},
  };



  const textFieldProps = [
    {
      id: "themeName",
      label: "테마 이름",
      placeholder: "입력해 주세요.",
      fullWidth :"fullWidth",
      variant: "filled",
    },
    {
      id: "hour",
      label: "시간",
      placeholder: "선택하기",
      variant: "filled"
    },
    {
      id: "minute",
      label: "분",
      placeholder: "선택하기",
      variant: "filled"
    },
  ];

  const MakeThemeModalViewProps = {
    formProps,
    textFieldProps,
  };

  return <MakeThemeModalView {...MakeThemeModalViewProps}/>;
};

export default MakeThemeModal;