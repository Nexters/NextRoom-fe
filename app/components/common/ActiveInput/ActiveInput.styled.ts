import { Input as MuiInput } from "@mui/material";
import { styled } from "styled-components";

interface CommonProps {
  active: boolean;
}

export const Input = styled(MuiInput)<CommonProps>`
  display: ${({ active }) => (active ? "block" : "none")};
`;

export const FormText = styled.span<CommonProps>`
  display: ${({ active }) => (active ? "none" : "block")};
`;
