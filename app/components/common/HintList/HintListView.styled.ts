import { styled } from "styled-components";
import { Box } from "@mui/material";

export const Wrapper = styled(Box)`
  display: flex;
  /* width: 100%; */
  height: 100vh;
  margin:64px 60px;
  padding:32px;
  background: white;
  border-radius: 30px;

  flex-direction: column;
  /* background: var(--m-3-sys-light-surface-container-low, #F7F2FA); */
`;




export const Title = styled.div`
  font-size: 1.25rem;
`;

export const MiddleTitle = styled.div`
  font-size: 1rem;
  color: var(--m-3-sys-light-primary, #6750A4);
`;
