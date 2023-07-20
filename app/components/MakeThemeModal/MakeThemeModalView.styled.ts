import { Card } from "@mui/material";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 312px;
  height: 408px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CardWrap = styled(Card)`
  background: var(--m-3-sys-light-surface-container-high, #ece6f0);
  border-radius: 28px;
`;

export const Title = styled.div`
  font-size: 1.75rem;
  font-weight: 400;
  margin: 32px auto;
  text-align: center;
`;

export const Description = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  margin: 32px auto;
  color: var(--m-3-sys-light-on-surface-variant, #49454f);
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 230px;
  margin: auto;
  height: 128px;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  margin: 50px 30px;
`;
