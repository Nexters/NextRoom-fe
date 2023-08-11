import { Button } from "@mui/material";
import { styled } from "styled-components";

export const Wrapper = styled.div``;

export const Title = styled.div`
  font-size: ${(props) => props.theme.fontSize.lg};
`;

export const AddButton = styled(Button)`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background-color: #fff;
  color: black;
`;
