import React, { useState } from "react";
import { Input } from "@mui/material";

interface Props {
  // eslint-disable-next-line react/require-default-props
  type?: string;
  // eslint-disable-next-line react/require-default-props
  placeholder?: string;
  // eslint-disable-next-line react/require-default-props
  value: string;
  onChange: () => void;
}
function ActiveInput(props: Props) {
  const { type = "text", placeholder = "", value = "", onChange } = props;

  const [active, setActive] = useState<boolean>(false);

  const switchActive = () => {
    setActive(!active);
  };

  if (active) {
    return (
      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={switchActive}
      />
    );
  }
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  return <span onClick={switchActive}>{value || placeholder}</span>;
}

export default ActiveInput;
