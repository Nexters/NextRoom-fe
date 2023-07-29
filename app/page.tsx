"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Login from "./login/Login";

import { getAccessToken } from "./uilts/localStorage";
import { useIsLoggedIn } from "./components/atoms/account.atom";

export default function LoginPage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useIsLoggedIn();
  const accountToken = getAccessToken();

  useEffect(() => {
    if (accountToken) {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn, accountToken]);

  if (isLoggedIn) {
    router.push("/home");
    return <div>Loading...</div>;
  }

  return <Login />;
}
