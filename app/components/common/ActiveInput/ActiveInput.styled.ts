import { TextField as MuiTextField } from "@mui/material";
import { styled } from "styled-components";

interface CommonProps {
  active: boolean;
}

export const TextField = styled(MuiTextField)<CommonProps>`
  display: ${({ active }) => (active ? "block" : "none")};
`;

export const FormText = styled.span<CommonProps>`
  display: ${({ active }) => (active ? "none" : "block")};
  width: 100%;
  white-space: pre;
`;
