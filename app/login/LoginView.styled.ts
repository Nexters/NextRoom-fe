import { Box, Button } from "@mui/material";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    margin-bottom: 1rem;
  }
`;

export const Loading = styled.div<{ isLoading: boolean }>`
  display: ${({ isLoading }) => (isLoading ? "block" : "none")};
  position: fixed;
  width: 100vw;
  height: 4px;
  top: 0px;
`;

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 2.93rem;
`;

export const LoginButton = styled(Button)`
  margin-top: 32px;
  height: 56px;
`;

export const StyledBox = styled(Box)`
  display: flex;
  min-width: 360px;
  margin: 62px auto;
`;

export const Contect = styled.div`
  color: #ffffff70;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  text-align: center;

  a:not(selector) {
    color: #ffffff70;
    text-decoration: none;
    outline: none;
  }
`;
