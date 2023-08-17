import { Box } from "@mui/material";
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

export const StyledBox = styled(Box)<{ active?: boolean }>`
  max-height: ${(props) =>
    props.active ? "220px" : "0"}; /* 예상되는 최대 높이값 설정 */
  overflow: hidden;
  transition: max-height 0.3s ease-in-out; /* 애니메이션 효과 추가 */
`;

export const Wrapper = styled.div<{ selected?: boolean }>`
  width: 100%;
  padding: 8px;
  background-color: ${({ theme }) => theme.color.white10};

  ${({ selected }) =>
    selected &&
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
    & input[type="number"]::-webkit-inner-spin-button,
    & input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    & input[type="number"] {
      -moz-appearance: textfield; /* Firefox에서 화살표를 숨기기 위한 설정 */
    }
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
  padding-right: 10px;
  justify-content: end;
  align-items: end;
  gap: 8px;
`;
