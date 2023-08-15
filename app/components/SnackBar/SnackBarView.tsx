import { Box, Snackbar } from "@mui/material";
import React from "react";

interface Props {
  open: boolean;
  ment: string;
  handleClose: () => void;
}
export default function SnackBarView(props: Props) {
  const { open, ment, handleClose } = props;

  return (
    <Box sx={{ width: 344 }}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        onClose={handleClose}
        message={ment}
        key="bottomleft"
      />
    </Box>
  );
}
