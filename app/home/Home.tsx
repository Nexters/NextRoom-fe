"use client";

import React, { useEffect } from "react";

import { useGetThemeList } from "@/queries/getThemeList";

import { apiClient } from "@/lib/reactQueryProvider";
import { getAccessToken } from "@/uilts/localStorage";

import { useIsLoggedInWrite } from "@/components/atoms/account.atom";

import HomeView from "./HomeView";

function Home() {
  const { data: categories = [] } = useGetThemeList();
  const accountToken = getAccessToken();
  const setIsLoggedIn = useIsLoggedInWrite();

  useEffect(() => {
    if (accountToken) {
      apiClient.defaults.headers.common.Authorization = accountToken;
      setIsLoggedIn(true);
    }
  }, [accountToken, setIsLoggedIn]);

  const themeAllProps = {
    categories,
  };

  return <HomeView {...themeAllProps} />;
}

export default Home;
