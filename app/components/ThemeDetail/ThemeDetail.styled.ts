import { styled } from "styled-components";
import { Box, Button } from "@mui/material";
import { MAIN_GRID_WIDTH } from "@/consts/styles/common";

export const Wrapper = styled(Box)`
  display: flex;
  margin: 0 auto;
  width: ${MAIN_GRID_WIDTH};
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
