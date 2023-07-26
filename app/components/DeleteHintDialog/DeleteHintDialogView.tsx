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
  handleClose: () => void;
  handleDelete: () => void;
}

const CANCEL = "취소";
const DELETE = "삭제하기";

function DeleteHintDialogView(props: Props) {
  const { open, handleClose, handleDelete } = props;
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">힌트를 삭제하시겠어요?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          지워진 내용은 되돌릴 수 없습니다.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{CANCEL}</Button>
        <Button onClick={handleDelete} autoFocus>
          {DELETE}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteHintDialogView;
