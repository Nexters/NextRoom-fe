import { Button, Grid, Card, TextField } from "@mui/material";
import { styled } from "styled-components";

export const CardWrap = styled(Card)`
  width: 512px;
  height: 390px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const ErrorMention = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.light};
  margin: 4px 16px 20px;
  color: #f2b8b5;
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
`;

export const ButtonContainer = styled(Grid)`
  display: flex;
  justify-content: flex-end;
`;

export const CancleButton = styled(Button)``;

export const SubmitButton = styled(Button)``;

export const StyledNumberInput = styled(TextField)`
  & input[type='number']::-webkit-inner-spin-button,
  & input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  & input[type='number'] {
    -moz-appearance: textfield; /* Firefox에서 화살표를 숨기기 위한 설정 */
  }
`;