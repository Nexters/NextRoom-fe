import { TextField as MuiTextField } from "@mui/material";
import { styled } from "styled-components";

interface CommonProps {
  inputActive: boolean;
}

export const TextField = styled(MuiTextField)<CommonProps>`
  display: ${({ inputActive }) => (inputActive ? "block" : "none")};
`;

export const FormText = styled.span<CommonProps>`
  display: ${({ inputActive }) => (inputActive ? "none" : "block")};
  width: 100%;
  white-space: pre;
`;
