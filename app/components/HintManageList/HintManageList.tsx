import React, { useState } from "react";
import { useGetHintList } from "@/queries/getHintList";
import HintManageListView from "./HintManageListView";
import { DeleteHintDialog } from "../DeleteHintDialog";

function HintManageList() {
  const [open, setOpen] = useState<boolean>(false);
  // const { id: themeId = 1 } = useThemeStateValue();
  const themeId = 1;
  const { data: hints = [] } = useGetHintList({ themeId });
  const onDelete = () => {
    setOpen(true);
  };
  const onSave = () => {};

  const hintManageListProps = {
    hints,
    onDelete,
    onSave,
  };

  return (
    <>
      <HintManageListView {...hintManageListProps} />
      <DeleteHintDialog
        open={open}
        handleClose={() => setOpen(false)}
        id={themeId}
      />
    </>
  );
}

export default HintManageList;
