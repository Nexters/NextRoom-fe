export interface MakeTypeModalProps {
  id: string;
  open: boolean;
  handleClose: () => void;
}

export interface MakeTypeModalViewProps extends MakeTypeModalProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formProps: Record<string, any>;
  TextFields: () => React.JSX.Element[];
}
