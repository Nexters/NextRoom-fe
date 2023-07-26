import { useDeleteHint } from "@/mutations/deleteHint";
import DeleteHintDialogView from "./DeleteHintDialogView";

interface Props {
  open: boolean;
  handleClose: () => void;
  id: number;
}

function DeleteHintDialog(props: Props) {
  const { open, handleClose, id } = props;
  const { mutateAsync: deleteHint } = useDeleteHint();

  const handleDelete = () => {
    deleteHint({ id });
    handleClose();
  };

  const DeleteHintDialogProps = {
    open,
    handleClose,
    handleDelete,
  };

  return <DeleteHintDialogView {...DeleteHintDialogProps} />;
}

export default DeleteHintDialog;
