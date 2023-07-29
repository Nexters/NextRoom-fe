"use client";

import React, { useEffect } from "react";
import { getAccessToken } from "@/uilts/localStorage";
import { useIsLoggedIn } from "@/components/atoms/account.atom";
import { useRouter } from "next/navigation";
import Home from "./Home";

function HomePage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useIsLoggedIn();
  const accountToken = getAccessToken();

  useEffect(() => {
    if (!accountToken && !isLoggedIn) {
      router.push("/");
    } else {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn, accountToken, router, isLoggedIn]);

  if (isLoggedIn) {
    return <Home />;
  }

  return <div>권한이 없습니다.</div>;
}

export default HomePage;
