import { styled } from "styled-components";
import { ListItemText } from "@mui/material";

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

export const LogoWrapper = styled.div`
  padding: 7.5px auto 7.5px 16px;
`;

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 20px;
  color: #21005d;
`;

export const Theme = styled(ListItemText)`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 18px;
  /* color: #21005d; */
`;
