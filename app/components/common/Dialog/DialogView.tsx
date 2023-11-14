import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

interface Props {
  open: boolean;
  handleDialogClose: () => void;
  content: any;
  handleQuitDialog: () => void;
}

const CANCEL = "취소";
const QUIT = "그만두기";

function DeleteThemeDialogView(props: Props) {
  const { open, handleDialogClose, content, handleQuitDialog } = props;

  return (
    <Dialog
      open={open}
      onClose={handleDialogClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle style={{ color: "white" }} id="alert-dialog-title">
        {content.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose}>{CANCEL}</Button>
        <Button onClick={handleQuitDialog} autoFocus>
          {QUIT}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteThemeDialogView;
