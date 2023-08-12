import { Fab } from "@mui/material";
import { styled } from "styled-components";

export const Header = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.fontSize.xs};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  color: #ffffff60;
  height: 34px;

  .smallHeader {
    width: 96px;
  }

  .largeHeader {
    width: calc((100% - (96px * 2)) / 2);
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

export const StyledFab = styled(Fab)`
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
`;
