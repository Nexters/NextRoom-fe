import { styled } from "styled-components";
import { Box } from "@mui/material";

export const Wrapper = styled(Box)`
  display: flex;
  height: 100vh;
  padding: 32px;

  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 1.25rem;
`;

export const MiddleTitle = styled.div`
  font-size: 1rem;
  color: var(--m-3-sys-light-primary, #6750a4);
`;
