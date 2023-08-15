import { useModalState } from "@/components/atoms/modals.atom";
import DialogView from "./DialogView";

type ContentType = "hintPut" | "themePut" | "hintPost" | "themePost";

interface Props {
  open: boolean;
  handleDialogClose: () => void;
  type: ContentType;
}

function Dialog(props: Props) {
  const [modalState, setModalState] = useModalState();
  const { open, handleDialogClose, type } = props;


  const handleCancleDialog = () => {
    handleDialogClose();
    setModalState({ ...modalState, isOpen: false });
  };

  // 힌트 함수 추가

  const content = {
    hintPost: {
      title: "힌트 추가를 그만두시겠어요?",
      description: "작성된 정보는 모두 사라집니다.",
      handleDialog: ()=>{},
    },
    themePost: {
      title: "테마 추가를 그만두시겠어요?",
      description: "작성된 정보는 모두 사라집니다.",
      handleDialog: handleCancleDialog,
    },
    hintPut: {
      title: "힌트 수정을 그만두시겠어요?",
      description: "수정사항은 사라집니다.",
      handleDialog: ()=>{},
    },
    themePut: {
      title: "테마 수정을 그만두시겠어요",
      description: "수정사항은 사라집니다.",
      handleDialog: handleCancleDialog,
    },

  };

  const DialogProps = {
    open,
    handleDialogClose,
    content: { ...content[type] },
  };

  return <DialogView {...DialogProps} />;
}

export default Dialog;
