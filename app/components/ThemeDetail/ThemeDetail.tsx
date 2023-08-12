import React, { useState } from "react";

import ThemeDetailView from "./ThemeDetailView";
import { DeleteThemeDialog } from "../DeleteThemeDialog";
import { useSelectedThemeValue } from "../atoms/selectedTheme.atom";
import SnackBar from "../SnackBar/SnackBar";

function ThemeDetail() {
  const selectedTheme = useSelectedThemeValue();
  const [open, setOpen] = useState<boolean>(false);
  const [snackOpen, setSnackOpen] = useState<boolean>(false);

  return (
    <>
      <ThemeDetailView handleOpen={() => setOpen(true)}/>
      <DeleteThemeDialog
        open={open}
        handleSnackOpen={() => setSnackOpen(true)}
        handleClose={() => setOpen(false)}
        id={selectedTheme.id}
      />
      <SnackBar
        open={snackOpen}
        handleClose={() => setSnackOpen(false)}
      />
    </>
  );
}

export default ThemeDetail;
