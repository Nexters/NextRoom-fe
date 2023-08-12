import { Button, Grid, Card } from "@mui/material";
import { styled } from "styled-components";

export const CardWrap = styled(Card)`
  width: 512px;
  height: 354px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.20);

;
`;

export const ErrorMention = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.light};
  margin: 4px 16px 20px;
  color: #F2B8B5;
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.light};
  margin: 4px 16px 20px;
  color: rgba(255, 255, 255, 1);
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ButtonContainer = styled(Grid)`
  display: flex;
  justify-content: flex-end;
`;

export const CancleButton = styled(Button)`
`;

export const SubmitButton = styled(Button)``;
