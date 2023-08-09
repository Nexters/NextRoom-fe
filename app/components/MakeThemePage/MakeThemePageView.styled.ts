import { styled } from "styled-components";

export const Container = styled.div`
  width: 512px;
  height: 254px;
  display: flex;
  flex-grow: 1;
  padding: 20px;
  margin: 0 80px;
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

export const TextWrapper = styled.div``;

export const ButtonContainer = styled.div`
  margin: 30px 0 10px;
  float: right;
`;
