import React, { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import * as S from "./ActiveInput.styled";

export interface ActiveInputProps extends UseFormRegisterReturn {
  // eslint-disable-next-line react/require-default-props
  type?: string;
  // eslint-disable-next-line react/require-default-props
  placeholder?: string;
  // eslint-disable-next-line react/require-default-props, react/no-unused-prop-types
  multiline?: boolean;
}
function ActiveInput(props: ActiveInputProps) {
  const {
    multiline = false,
    type = "text",
    placeholder = "",
    onChange: formHookOnChange,
    onBlur: formHookOnBlur,
    ref,
    name,
  } = props;

  const [inputActive, setInputActive] = useState<boolean>(false);
  const [displayName, setDisplayName] = useState<string>("");

  const switchActive = () => {
    setInputActive(!inputActive);
  };

  const onBlur = (
    e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>
  ) => {
    switchActive();
    formHookOnBlur(e);
  };

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setDisplayName(e.target.value);
    formHookOnChange(e);
  };

  return (
    <>
      <S.TextField
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        name={name}
        inputActive={inputActive}
        multiline={multiline}
        variant="standard"
        fullWidth
      />
      <S.FormText onClick={switchActive} inputActive={inputActive}>
        {displayName || placeholder}
      </S.FormText>
    </>
  );
}

export default ActiveInput;
