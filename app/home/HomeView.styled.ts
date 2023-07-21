import { styled } from "styled-components";
import { Box } from "@mui/material";

export const Wrapper = styled(Box)`
  display: flex;
  background-color: var(--m-3-sys-light-surface-container-low, #F7F2FA);
`;

export const Cont = styled(Box)`
  /* flexGrow: 1, bgcolor: "background.default", p: 3 */
  flex-grow:1;
  background-color: white;
`;


export const Title = styled.div`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Ment = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
