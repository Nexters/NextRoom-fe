import { styled } from "styled-components";
import { Box } from "@mui/material";

export const Wrapper = styled(Box)`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

export const Cont = styled(Box)`
  flex-grow: 1;
  height: 100%;
  margin-left: 80px;
`;
export const TopNav = styled.div`
  display: flex;
  justify-content: end;
  height: 68px;
  padding: 18px 48px;
  div {
    background-color: #fff;
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }
`;

export const Title = styled.div`
  font-size: 4rem;
`;

export const Body = styled.div`
  width: 1128px;
  height: 100%;
  margin: 0 auto;
  overflow-y: auto;
`;
