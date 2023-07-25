import React from "react";
import { useGetHintList } from "@/queries/getHintList";
import HintManageListView from "./HintManageListView";

function HintManageList() {
  const themeId = 1;
  const { data: hints = [] } = useGetHintList({ themeId });
  const onDelete = () => {};
  const onSave = () => {};

  const hintManageListProps = {
    hints,
    onDelete,
    onSave,
  };

  return <HintManageListView {...hintManageListProps} />;
}

export default HintManageList;
