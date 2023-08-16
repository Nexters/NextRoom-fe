import { Avatar } from "@mui/material";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 68px;
  padding: 0 80px;
  align-items: center;
  justify-content: end;
  box-sizing: border-box;
`;

export const StyledAvatar = styled(Avatar)`
  cursor: pointer;
`;
