import { Button } from "@mui/material";
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
  margin-top: 1rem;
`;
