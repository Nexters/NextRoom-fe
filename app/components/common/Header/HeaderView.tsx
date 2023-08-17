import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as S from "./HeaderView.styled";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = Record<string, any>;

const LOGOUT = "로그아웃";

function HeaderView({ avatarProps, menuProps, logoutMenuProps }: Props) {
  return (
    <S.Wrapper>
      <S.StyledAvatar {...avatarProps} />
      <Menu {...menuProps}>
        <MenuItem {...logoutMenuProps}>{LOGOUT}</MenuItem>
      </Menu>
    </S.Wrapper>
  );
}

export default HeaderView;
