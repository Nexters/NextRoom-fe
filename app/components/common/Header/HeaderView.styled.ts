import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 68px;
  align-items: center;
  justify-content: end;
  box-sizing: border-box;
`;

export const Icon = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.theme.color.white};
  border-radius: 50%;
  cursor: pointer;
`;
