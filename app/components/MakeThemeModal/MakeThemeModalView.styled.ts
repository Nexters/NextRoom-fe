import { Card } from "@mui/material";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CardWrap = styled(Card)`
  background: var(--m-3-sys-light-surface-container-high, #ece6f0);
  border-radius: 28px;
  width: 560px; 
  padding: 24px;
`;

export const Title = styled.div`
  font-size: 1.75rem;
  font-weight: 400;
`;

export const Description = styled.div`
  font-size: 1rem;
  font-weight: 400;
  margin: 10px 0;
  color: var(--m-3-sys-light-on-surface-variant, #49454f);
`;

export const TextWrapper = styled.div`
  
`;

export const ButtonContainer = styled.div`
  margin: 30px 0 10px;
  float: right;
  
`;
