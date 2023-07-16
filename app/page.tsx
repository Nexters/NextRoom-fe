"use client";

import Login from "./components/Login/Login";
import { useIsLoggedInValue } from "./components/atoms/account.atom";

export default function Home() {
  const isLoggedIn = useIsLoggedInValue();

  if (isLoggedIn) {
    return <Home />;
  }

  return <Login />;
}
