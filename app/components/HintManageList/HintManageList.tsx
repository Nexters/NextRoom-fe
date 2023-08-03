import React from "react";
import { useGetHintList } from "@/queries/getHintList";

import HintManageListView from "./HintManageListView";

import { useIsOpenAddAccordionValue } from "../atoms/hints.atom";
import { useSelectedThemeValue } from "../atoms/selectedTheme.atom";

function HintManageList() {
  const adding = useIsOpenAddAccordionValue();
  const { id: themeId } = useSelectedThemeValue();
  const { data: hints = [], isLoading = false } = useGetHintList({ themeId });

  const hasNoHints = hints.length === 0;

  const hintManageListProps = {
    hints,
    adding,
    isLoading,
    hasNoHints,
  };

  return <HintManageListView {...hintManageListProps} />;
}

export default HintManageList;
