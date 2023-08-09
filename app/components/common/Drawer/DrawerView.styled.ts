import { styled } from "styled-components";
import { List, ListItemText } from "@mui/material";

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 20px;
  color: #21005d;
`;

export const ShopName = styled(ListItemText)`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 400;
  margin-bottom: 18px;
  /* color: #21005d; */
`;

export const ListWrap = styled(List)`
  width: 360px;
`;

