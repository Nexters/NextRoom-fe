import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

interface Props {
  open: boolean;
  handleClose: () => void;
  handleDelete: () => void;
}

const CANCEL = "취소";
const DELETE = "그만두기";

function CancelDialogView(props: Props) {
  const { open, handleClose, handleDelete } = props;
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="xs"
      style={{ borderRadius: "28px", color: "red" }}
    >
      <DialogTitle style={{ color: "white" }} id="alert-dialog-title">
        테마생성을 그만두시겠어요?
      </DialogTitle>

      <DialogActions>
        <Button onClick={handleClose}>{CANCEL}</Button>
        <Button onClick={handleDelete} autoFocus>
          {DELETE}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CancelDialogView;
