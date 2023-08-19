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
  timeLimitProps: Record<string, any>;
  themeNameProps: Record<string, any>;
  hintLimitProps: Record<string, any>;
  timeOption: TimeItem[];
};

function MakeThemeModalView(props: Props) {
  const [modalState, setModalState] = useModalState();
  const ADD_THEME = "테마 추가하기";
  const ADD_BTN = "추가하기";
  const MODIFY_THEME = "테마 수정하기";
  const MODIFY_BTN = "수정하기";
  const { watch } = useForm();
  const {
    formProps,
    timeOption,
    themeNameProps,
    timeLimitProps,
    hintLimitProps,
  } = props;

  const toggleOffModalState = () => {
    setModalState({ ...modalState, isOpen: false });
  };


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
            <S.Title>
              {modalState.type === "post" ? ADD_THEME : MODIFY_THEME}
            </S.Title>
            <S.Description>
              테마 추가 후 힌트를 등록할 수 있어요!
              <br />
              아래 정보는 언제든지 수정 가능합니다.
            </S.Description>
            <S.TextWrapper>
              <TextField
                {...themeNameProps}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                fullWidth
              />
              <S.Description>{themeNameProps.message}</S.Description>
              <Autocomplete
                disablePortal
                id="timeLimit"
                options={timeOption}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    {...timeLimitProps}
                    variant="filled"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                  />
                )}
              />
              <S.Description>{timeLimitProps.message}</S.Description>
              <TextField
                {...hintLimitProps}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                fullWidth
              />
              <S.Description>{hintLimitProps.message}</S.Description>
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
                {modalState.type === "post" ? ADD_BTN : MODIFY_BTN}
              </Button>
            </S.ButtonContainer>
          </S.CardWrap>
        </S.Container>
      </Modal>
    </div>
  );
}

export default MakeThemeModalView;
