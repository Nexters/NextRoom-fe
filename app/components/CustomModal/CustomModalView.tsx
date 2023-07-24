import React from "react";
import { Button, Modal } from "@mui/material";
import * as S from "./CustomModalView.styled";
import { CustomTypeModalProps } from "./CustomModal.type";

function CustomModalView(props: CustomTypeModalProps) {
  const { open, content, handleClose } = props;

  return (
    <Modal open={open} onClose={handleClose}>
      <S.Container>
        <S.Title>{content.title}</S.Title>
        <S.Description>{content.describe}</S.Description>
        <S.ContentsWrapper>
          <S.ContentsWrapper>
            <Button variant="contained" onClick={handleClose}>
              취소
            </Button>
            <Button variant="contained" type="submit">
              그만두기
            </Button>
          </S.ContentsWrapper>
        </S.ContentsWrapper>
      </S.Container>
    </Modal>
  );
}

export default CustomModalView;
