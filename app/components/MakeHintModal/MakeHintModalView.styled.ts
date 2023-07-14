import { styled } from "styled-components";
import { Grid } from "@mui/material";
import { KeyboardBackspace } from "@mui/icons-material";

export const Container = styled.div`
  display: flex;
  padding: 30px 0;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
`;

export const Title = styled.div`
  font-size: 1.75rem;
  font-weight: 400;
  margin: 32px auto;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledBackIcon = styled(KeyboardBackspace)`
  margin-left: 20px;
  cursor: pointer;
`;

export const GridItem = styled(Grid)<{ margin?: string }>`
  margin-bottom: 30px;
  ${({ margin }) => `margin: ${margin};`}
`;
