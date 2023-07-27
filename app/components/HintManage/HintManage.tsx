import React from "react";
import HintManageView from "./HintManageView";
import { useIsOpenAddAccordionWrite } from "../atoms/hints.atom";

function HintManage() {
  const setAdding = useIsOpenAddAccordionWrite();

  const activateAdding = () => {
    setAdding(true);
  };

  const hintManageViewProps = {
    activateAdding,
  };
  return <HintManageView {...hintManageViewProps} />;
}

export default HintManage;
