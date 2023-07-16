import React from "react";
import { Box, Button, Grid, Modal } from "@mui/material";
import * as S from "./MakeHintModalView.styled";
import { MakeTypeModalViewProps } from "./MakeHintModal.type";

function MakeHintModalView(props: MakeTypeModalViewProps) {
  const { formProps, TextFields, open, handleClose } = props;

  return (
    <Modal open={open} onClose={handleClose}>
      <S.Container>
        <S.StyledBackIcon onClick={handleClose} />
        <S.Title>힌트 만들기</S.Title>
        <S.ContentsWrapper>
          <Box {...formProps}>
            <Grid>
              <TextFields />
              <S.ContentsWrapper>
                <Button variant="contained" type="submit">
                  힌트 작성 완료
                </Button>
              </S.ContentsWrapper>
            </Grid>
          </Box>
        </S.ContentsWrapper>
      </S.Container>
    </Modal>
  );
}

export default MakeHintModalView;
