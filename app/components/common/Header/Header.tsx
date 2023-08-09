import React from "react";
import { useIsLoggedInWrite } from "@/components/atoms/account.atom";
import { removeAccessToken } from "@/uilts/localStorage";
import HeaderView from "./HeaderView";

function Header() {
  const setIsLoggedIn = useIsLoggedInWrite();

  const signout = () => {
    removeAccessToken();
    setIsLoggedIn(false);
  };

  const iconProps = {
    onClick: () => signout(),
  };
  return <HeaderView iconProps={{ ...iconProps }} />;
}

export default Header;
