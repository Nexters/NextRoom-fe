import React from "react";
import { useGetHintList } from "@/queries/getHintList";

import HintManageListView from "./HintManageListView";

import { useIsOpenAddAccordionValue } from "../atoms/hints.atom";
import { useSelectedThemeValue } from "../atoms/selectedTheme.atom";

function HintManageList() {
  const adding = useIsOpenAddAccordionValue();
  const { id: themeId } = useSelectedThemeValue();
  const { data: hints = [] } = useGetHintList({ themeId });

  const hintManageListProps = {
    hints,
    adding,
  };

  return <HintManageListView {...hintManageListProps} />;
}

export default HintManageList;
