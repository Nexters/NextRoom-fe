import React from "react";
import { Input } from "@mui/material";

interface Props {
  type: string | undefined;
  active: boolean;
  value: string;
  onChange: () => void;
}
function ActiveInput({ type = "text", active, value, onChange }: Props) {
  if (active) {
    return <Input type={type} value={value} onChange={onChange} />;
  }
  return <span>{value}</span>;
}

export default ActiveInput;
