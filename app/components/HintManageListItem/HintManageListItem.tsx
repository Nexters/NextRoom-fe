import React, { useState } from "react";
import HintManageListItemView from "./HintManageListItemView";
import { DeleteHintDialog } from "../DeleteHintDialog";

type Props = {
  id: number;
  hintCode: string;
  contents: string;
  answer: string;
  progress: number;
};

function HintManageListItem(props: Props) {
  const { id, hintCode, contents, answer, progress } = props;
  const [open, setOpen] = useState<boolean>(false);
  // const { id: themeId = 1 } = useSelectedThemeValue();
  const themeId = 1;

  const onDelete = () => {
    setOpen(true);
  };
  const onSave = () => {};

  const HintManageListItemProps = {
    id,
    hintCode,
    contents,
    answer,
    progress,
    onDelete,
    onSave,
  };

  return (
    <>
      <HintManageListItemView {...HintManageListItemProps} />
      <DeleteHintDialog
        open={open}
        handleClose={() => setOpen(false)}
        id={themeId}
      />
    </>
  );
}

export default HintManageListItem;
