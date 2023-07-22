import React from "react";

import HomeView from "./HomeView";

function Home() {


  const categories = [
        { id: 1, title: "첫번째 테마", timeLimit: 65 },
        { id: 2, title: "두번째 테마", timeLimit: 65 },
        { id: 3, title: "세번째 테마", timeLimit: 65 }
  ];

  const themeAllProps = {
    categories,
  };

  return <HomeView {...themeAllProps} />;
}

export default Home;
