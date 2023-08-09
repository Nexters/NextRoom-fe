import React, { useEffect } from "react";
import { Button, TextField,  } from "@mui/material";
import { useForm } from "react-hook-form";
import { useModalState } from "@/components/atoms/modals.atom";
import * as S from "./MakeThemePageView.styled";

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

function MakeThemePageView(props: Props) {
  const [modalState, setModalState] = useModalState();
  const ADD_BTN = "추가하기";
  const MODIFY_BTN = "수정하기";
  const { watch } = useForm();
  const {
    formProps,
    themeNameProps,
    timeLimitProps,
  } = props;

  const toggleOffModalState = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log({ watch });
  }, [watch]);

  return (
    <div>
      <S.Container>
        <div {...formProps}>
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
            <TextField
                {...timeLimitProps}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                fullWidth
              />
            <S.Description>{timeLimitProps.message}</S.Description>
            {/* <TextField
              {...hintLimitProps}
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              fullWidth
            />
            <S.Description>{hintLimitProps.message}</S.Description> */}
          </S.TextWrapper>
          <S.ButtonContainer>
            <Button variant="text" onClick={toggleOffModalState}>
              취소
            </Button>
            <Button variant="text" onClick={toggleOffModalState} type="submit">
              {modalState.type === "post" ? ADD_BTN : MODIFY_BTN}
            </Button>
          </S.ButtonContainer>
        </div>
      </S.Container>
    </div>
  );
}

export default MakeThemePageView;
