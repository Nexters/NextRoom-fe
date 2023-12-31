import { styled } from "styled-components";
import { List, ListItem, ListItemText } from "@mui/material";

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 20px 0;
  color: #21005d;
`;

export const ShopName = styled(ListItemText)`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 400;
  margin: 18px !important;
  color: rgba(255, 255, 255, 0.7);
`;

export const ShopNameListItem = styled(ListItem)`
  margin-bottom: 14px;
`;

export const Wrapper = styled.div`
  width: 360px;
  height: 100%;
  min-height: 100vh;
  padding: 12px;
  box-sizing: border-box;
  border-right: #ffffff20 solid 1px;
  background-image: url("/images/drawer/background.png");
  background-repeat: no-repeat;
  background-position: center bottom;
`;

export const ListWrap = styled(List)`
  width: 360px;
  min-width: 360px;
  height: 100%;
  min-height: 100vh;
  padding: 12px;
  box-sizing: border-box;
  border-right: #ffffff20 solid 1px;
  background-image: url("/images/drawer/background.png");
  background-repeat: no-repeat;
  background-position: center bottom;
  overflow-y: auto;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  width: 336px;
  height: 56px;
`;

export const Theme = styled(ListItemText)`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 18px;
`;
