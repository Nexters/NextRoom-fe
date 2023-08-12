import { Button } from "@mui/material";
import { styled } from "styled-components";

export const HintListWrapper = styled.div`
  margin-top: 60px;
`;

export const Header = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.fontSize.xs};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  color: #ffffff60;
  height: 34px;
  gap: 8px;

  .smallHeader {
    width: 96px;
  }

  .largeHeader {
    /* width: calc(((100% - (96px * 2)) / 2) - 8px); */
    width: 448px;
  }
`;

export const Empty = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 230px;
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.fontSize.sm};
  background-color: #ffffff10;
  border: 0;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`;

export const FloatButton = styled(Button)`
  position: fixed !important;
  color: #000 !important;
  background-color: #fff !important;
  padding: 10px 24px !important;
  bottom: 40px;
  left: calc((100% - 360px) / 2 + 360px);
  transform: translateX(-50%);
  font-weight: 600;
`;
