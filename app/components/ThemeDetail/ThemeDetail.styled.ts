import { styled } from "styled-components";
import { Box, Button } from "@mui/material";

export const Wrapper = styled(Box)`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const MiddleTitle = styled.div`
  font-size: 1rem;
  opacity: 0.7;
`;

export const UpdateButton = styled(Button)`
  width: 147px;
  height: 40px;
  font-size: ${(props) => props.theme.fontSize.sm};
`;
