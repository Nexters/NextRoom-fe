import { Box, Snackbar } from "@mui/material";
import React from "react";

interface Props {
  open: boolean;
  handleClose: () => void;
}
export default function SnackBar(props: Props) {
  const { open, handleClose } = props;

  const DeleteTheme =
    "테마를 삭제했습니다.  단말기에서 업데이트를 진행해 주세요.";

  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        onClose={handleClose}
        message={DeleteTheme}
        key="bottomleft"
      />
    </Box>
  );
}
