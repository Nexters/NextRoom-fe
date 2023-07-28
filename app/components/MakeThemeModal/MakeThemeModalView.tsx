import React, { useEffect } from "react";
import { Button, Modal, TextField, Autocomplete } from "@mui/material";
import { useForm } from "react-hook-form";
import { useModalState } from "@/components/atoms/modals.atom";
import * as S from "./MakeThemeModalView.styled";

interface TimeItem {
  label: string;
  minute: number;
}

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formProps: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  textFieldProps: Record<string, any>;
  autoCompleteProps: Record<string, any>;
  timeOption: TimeItem[];
};

function MakeThemeModalView(props: Props) {
  const [modalState, setModalState] = useModalState();
  const toggleOffModalState = () =>
    setModalState({ ...modalState, isOpen: false });

  const { watch } = useForm();
  const { formProps, timeOption, textFieldProps, autoCompleteProps } = props;

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log({ watch });
  }, [watch]);

  return (
    <div>
      <Modal
        keepMounted
        open={modalState.isOpen}
        onClose={toggleOffModalState}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <S.Container>
          <S.CardWrap {...formProps}>
            <S.Title>테마 추가하기</S.Title>
            <S.Description>
              테마 추가 후 힌트를 등록할 수 있어요!
              <br />
              아래 정보는 언제든지 수정 가능합니다.
            </S.Description>
            <S.TextWrapper>
              <TextField {...textFieldProps} fullWidth />
              <S.Description>{textFieldProps.message}</S.Description>
              <Autocomplete
                disablePortal
                id="timeLimit"
                options={timeOption}
                renderInput={(params) => (
                  <TextField {...params} {...autoCompleteProps} fullWidth />
                )}
              />
              <S.Description>{autoCompleteProps.message}</S.Description>
            </S.TextWrapper>
            <S.ButtonContainer>
              <Button variant="text" onClick={toggleOffModalState}>
                취소
              </Button>
              <Button
                variant="text"
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
