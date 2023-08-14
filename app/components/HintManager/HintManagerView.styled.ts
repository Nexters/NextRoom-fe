import { styled } from "styled-components";

export const SummaryText = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Wrapper = styled.div<{ active?: boolean }>`
  width: 100%;
  padding: 8px;
  background-color: ${({ theme }) => theme.color.white10};

  ${({ active }) =>
    active &&
    `
    border: 1px solid #B5E6D2;
    border-radius: 8px;
  `}
`;

export const InputsWrapper = styled.div`
  display: flex;

  width: 100%;
  height: 173px;
  gap: 8px;

  .inputBox {
    width: 96px;
    height: 36px;
    background-color: #ffffff14;
    color: #fff;
  }

  .TextareaBox {
    width: 448px;
    height: 128px;
    background-color: #ffffff14;
    color: #fff;
    align-items: unset;
    overflow: auto;
  }
`;

export const FunctionButtonsWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  gap: 8px;
`;
