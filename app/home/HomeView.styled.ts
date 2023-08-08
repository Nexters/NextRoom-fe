import { styled } from "styled-components";
import { Box } from "@mui/material";

export const Wrapper = styled(Box)`
  display: flex;
`;

export const Cont = styled(Box)`
  flex-grow: 1;
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
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Ment = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
