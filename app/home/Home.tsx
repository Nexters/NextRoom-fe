"use client";

import React, { useEffect } from "react";

import { useGetThemeList } from "@/queries/getThemeList";
import useCheckSignIn from "@/hooks/useCheckSignIn";

import { useRouter } from "next/navigation";
import HomeView from "./HomeView";

function Home() {
  const { data: categories = [] } = useGetThemeList();
  const router = useRouter();

  const isSignIn = useCheckSignIn();

  useEffect(() => {
    if (!isSignIn) {
      router.push("/");
    }
  }, [isSignIn, router]);

  const themeAllProps = {
    categories,
  };

  if (!isSignIn) return <div>Loading...</div>;

  return <HomeView {...themeAllProps} />;
}

export default Home;
