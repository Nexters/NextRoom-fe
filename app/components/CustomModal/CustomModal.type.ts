export interface CustomTypeModalProps {
  id: string;
  content: {
    title: string;
    describe: string;
    btnName: string;
    handleModal: () => void;
  };
  open: boolean;
  handleClose: () => void;
}
