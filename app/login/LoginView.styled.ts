import { Box, Button } from "@mui/material";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 2.93rem;
`;

export const LoginButtonWrapper = styled.div`
  margin-top: 32px;
`;

export const ServerErrorMessage = styled.div`
  color: #f2b8b5;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  margin-bottom: 12px;
`;

export const LoginButton = styled(Button)`
  width: 100%;
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
