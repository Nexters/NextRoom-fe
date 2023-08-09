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

export const Body = styled.div`
  width: 1128px;
  height: 100%;
  margin: 0 auto;
  overflow-y: auto;
`;
