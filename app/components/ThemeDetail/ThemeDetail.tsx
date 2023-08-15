import React, { useState } from "react";
import { useSelectedThemeValue } from "../atoms/selectedTheme.atom";
import DeleteDialog from "../common/DeleteDialog/DeleteDialog";
import ThemeDetailView from "./ThemeDetailView";

function ThemeDetail() {
  const selectedTheme = useSelectedThemeValue();
  const [open, setOpen] = useState<boolean>(false);
  

  return (
    <>
      <ThemeDetailView handleOpen={() => setOpen(true)} />
      <DeleteDialog
        open={open}
        handleDialogClose={() => setOpen(false)}
        id={selectedTheme.id}
        type="themeDelete"
      />
    </>
  );
}

export default ThemeDetail;
