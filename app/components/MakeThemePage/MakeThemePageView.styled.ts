import { Button, Grid } from "@mui/material";
import { styled } from "styled-components";

export const Container = styled.div`
  width: 512px;
  height: 254px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const Title = styled.div`
  font-size: 1.75rem;
  font-weight: 400;
`;

export const Description = styled.div`
  font-size: 1rem;
  font-weight: 400;
  margin: 10px 0;
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
  background-color: inherit;

`;

export const SubmitButton = styled(Button)`
`;
