import React from "react";
import CustomModalView from "./CustomModalView";
import { CustomTypeModalProps } from "./CustomModal.type";

function CustomModal(props: CustomTypeModalProps) {
  const { open = false, handleClose = () => {}, id = "", content={} } = props;
  return <CustomModalView id={id} content={content} open={open} handleClose={handleClose} />;
}

export default CustomModal;
