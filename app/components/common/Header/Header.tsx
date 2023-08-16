import React, { useState, MouseEvent } from "react";
import { useIsLoggedInWrite } from "@/components/atoms/account.atom";
import { removeAccessToken } from "@/uilts/localStorage";
import HeaderView from "./HeaderView";

function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const setIsLoggedIn = useIsLoggedInWrite();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    removeAccessToken();
    setIsLoggedIn(false);
    handleClose();
  };

  const avatarProps = {
    onClick: handleClick,
    sx: { width: "32px", height: "32px" },
  };

  const menuProps = {
    anchorEl,
    open: Boolean(anchorEl),
    onClose: handleClose,
    keepMounted: true,
  };

  const logoutMenuProps = {
    onClick: handleLogout,
  };

  const headerProps = {
    menuProps,
    avatarProps,
    logoutMenuProps,
  };

  return <HeaderView {...headerProps} />;
}

export default Header;
