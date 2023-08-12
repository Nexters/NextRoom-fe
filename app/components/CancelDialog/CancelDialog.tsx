import CancelDialogView from "./CancelDialogView";

interface Props {
  open: boolean;
  handleClose: () => void;
  handleModalClose: () => void;

}

function CancelDialog(props: Props) {
  const { open, handleClose, handleModalClose } = props;

  const handleDelete = () => {
    handleModalClose()
    handleClose();
  };

  const DeleteHintDialogProps = {
    open,
    handleClose,
    handleDelete,
  };

  return <CancelDialogView {...DeleteHintDialogProps} />;
}

export default CancelDialog;
