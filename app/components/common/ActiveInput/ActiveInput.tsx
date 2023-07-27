import React, { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import * as S from "./ActiveInput.styled";

interface Props extends UseFormRegisterReturn {
  // eslint-disable-next-line react/require-default-props
  type?: string;
  // eslint-disable-next-line react/require-default-props
  placeholder?: string;
}
function ActiveInput(props: Props) {
  const {
    type = "text",
    placeholder = "",
    onChange,
    onBlur: formHookOnBlur,
    ref,
    name,
  } = props;

  const [active, setActive] = useState<boolean>(false);

  const switchActive = () => {
    setActive(!active);
  };

  const onBlur = (
    e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>
  ) => {
    switchActive();
    formHookOnBlur(e);
  };

  return (
    <>
      <S.Input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        name={name}
        active={active}
      />
      <S.FormText onClick={switchActive} active={active}>
        {placeholder}
      </S.FormText>
    </>
  );
}

export default ActiveInput;
