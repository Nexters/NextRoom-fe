import React from "react";

import { useGetHintList } from "@/queries/getHintList";
import HintListView from "./HintListView";

function EmptyHomeHome() {
  const selectedThemeId = 3;
  const { data: hintList = [] } = useGetHintList({ themeId: selectedThemeId });

  const hintListProps = {
    hintList,
  };

  return <HintListView {...hintListProps} />;
}

export default EmptyHomeHome;
