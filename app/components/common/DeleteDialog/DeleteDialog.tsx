import { useDeleteTheme } from "@/mutations/deleteTheme";
import { useDeleteHint } from "@/mutations/deleteHint";
import DeleteDialogView from "./DeleteDialogView";

type ContentType = "hintDelete" | "themeDelete";

interface Props {
  open: boolean;
  handleDialogClose: () => void;
  id: number;
  type: ContentType;
}

function DeleteDialog(props: Props) {
  const { open, handleDialogClose, id, type } = props;
  const { mutateAsync: deleteTheme } = useDeleteTheme();
  const { mutateAsync: deleteHint } = useDeleteHint();

  const handleThemeDelete = () => {
    deleteTheme({ id });
    handleDialogClose();
  };

  const handleHintDelete = () => {
    deleteHint({ id });
    handleDialogClose();
  };

  // 힌트 함수 추가

  const content = {
    hintDelete: {
      title: "힌트를 삭제하시겠어요",
      description: "작성된 정보는 모두 사라집니다.",
      handleDialog: handleHintDelete,
    },
    themeDelete: {
      title: "테마를 삭제하시겠어요?",
      description: "힌트까지 모두 사라지고 삭제된 정보는 되돌릴 수 없어요.",
      handleDialog: handleThemeDelete,
    },
  };

  const DeleteDialogProps = {
    open,
    handleDialogClose,
    content: { ...content[type] },
  };

  return <DeleteDialogView {...DeleteDialogProps} />;
}

export default DeleteDialog;
