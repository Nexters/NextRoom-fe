import React from "react";
import { useGetHintList } from "@/queries/getHintList";
import HintManageListView from "./HintManageListView";
import { useIsOpenAddAccordionValue } from "../atoms/hints.atom";

function HintManageList() {
  const adding = useIsOpenAddAccordionValue();
  // const { id: themeId = 1 } = useSelectedThemeValue();
  const themeId = 1;
  const { data: hints = [] } = useGetHintList({ themeId });

  const hintManageListProps = {
    hints,
    adding,
  };

  return <HintManageListView {...hintManageListProps} />;
}

export default HintManageList;
