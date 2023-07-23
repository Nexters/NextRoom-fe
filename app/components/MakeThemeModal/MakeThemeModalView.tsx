/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import Modal from "@mui/material/Modal";

import * as S from "./MakeThemeModalView.styled";

import { useModalState } from "@/components/atoms/modals.atom";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formProps: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  textFieldProps: Record<string, any>;
};


function MakeThemeModalView(props: Props) {
  const [modalState, setModalState] = useModalState();


  const toggleOnModalState = () => setModalState(true);
  const toggleOffModalState = () => setModalState(false);


  const { register, watch } = useForm();
  const { TextFields, formProps } = props;

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log({ watch });
  }, [watch]);

  
  return (
    <div>

      <Modal
        keepMounted
        open={modalState}
        onClose={toggleOffModalState}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <S.Container>
          <S.CardWrap
            // container
            sx={{ width: 312, height: 408, aline: "center" }}
            {...formProps}
          >
            <S.Title>테마 추가하기</S.Title>
            <S.Description>
              테마 추가 후 힌트를 등록할 수 있어요!
              <br />
              아래 정보는 언제든지 수정 가능합니다.
            </S.Description>
            <S.TextWrapper >
            <TextFields />

            </S.TextWrapper>
            <S.ButtonContainer>
              <Button
                variant="contained"
                onClick={toggleOffModalState}
                type="submit"
              >
                확인
              </Button>
            </S.ButtonContainer>
          </S.CardWrap>
        </S.Container>
      </Modal>
    </div>
  );
}

export default MakeThemeModalView;
