import { useDeleteTheme } from "@/mutations/deleteTheme";
import DeleteThemeDialogView from "./DeleteThemeDialogView";

interface Props {
  open: boolean;
  handleSnackOpen: () => void;
  handleClose: () => void;
  id: number;
}

function DeleteThemeDialog(props: Props) {
  const { open, handleSnackOpen, handleClose, id } = props;
  const { mutateAsync: deleteTheme } = useDeleteTheme();

  const handleDelete = () => {
    deleteTheme({ id });
    handleSnackOpen();
    handleClose();
  };

  const DeleteThemeDialogProps = {
    open,
    handleClose,
    handleDelete,
  };

  return <DeleteThemeDialogView {...DeleteThemeDialogProps} />;
}

export default DeleteThemeDialog;
