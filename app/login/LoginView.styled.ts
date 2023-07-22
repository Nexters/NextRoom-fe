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

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 2.93rem;
`;

export const LoginButton = styled(Button)`
  margin-top: 1rem;
`;
