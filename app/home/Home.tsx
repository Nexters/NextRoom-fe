import React from "react";

import { useGetThemeList } from "@/queries/getThemeList";

import HomeView from "./HomeView";

function Home() {
  const { data: categories = [] } = useGetThemeList();

  const themeAllProps = {
    categories,
  };

  return <HomeView {...themeAllProps} />;
}

export default Home;
