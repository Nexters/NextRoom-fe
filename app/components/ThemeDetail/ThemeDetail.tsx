import React, { useState } from "react";
import { useSelectedThemeValue } from "../atoms/selectedTheme.atom";
import DeleteDialog from "../common/DeleteDialog/DeleteDialog";
import ThemeDetailView from "./ThemeDetailView";
import Dialog from "../common/Dialog/Dialog";
import { useActiveHintState } from "../atoms/activeHint.atom";
import { useModalStateWrite } from "../atoms/modals.atom";

function ThemeDetail() {
  const selectedTheme = useSelectedThemeValue();
  const [open, setOpen] = useState<boolean>(false);
  const [activeHint, setActiveHint] = useActiveHintState();
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const  setModalState = useModalStateWrite();

  return (
    <>
      <ThemeDetailView handleOpen={() => setOpen(true)} handleDialogOpen={()=>setDialogOpen(true)} />
      <DeleteDialog
        open={open}
        handleDialogClose={() => setOpen(false)}
        id={selectedTheme.id}
        type="themeDelete"
      />
      <Dialog
        handleBtn={() => {
          setModalState({isOpen:true, type: "put"})
          setActiveHint({isOpen:false, type: "put"})
        }}
        open={dialogOpen}
        handleDialogClose={() => setDialogOpen(false)}
        type={activeHint.type === "post" ? "hintPost" : "hintPut"}
      />
    </>
  );
}

export default ThemeDetail;
