import React, { useEffect } from "react";
import { TextField, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { useModalState } from "@/components/atoms/modals.atom";
import * as S from "./MakeThemePageView.styled";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formProps: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  timeLimitProps: Record<string, any>;
  themeNameProps: Record<string, any>;
  hintLimitProps: Record<string, any>;
};

function MakeThemePageView(props: Props) {
  const [modalState, setModalState] = useModalState();
  const ADD_BTN = "추가하기";
  const MODIFY_BTN = "수정하기";
  const { watch } = useForm();
  const { formProps, themeNameProps, timeLimitProps } = props;

  const toggleOffModalState = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log({ watch });
  }, [watch]);

  return (
    <S.Container {...formProps}>
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
      <S.ButtonContainer container spacing={1}>
        <Grid item>
          <S.CancleButton variant="text" onClick={toggleOffModalState}>
            취소
          </S.CancleButton>
        </Grid>
        <Grid item>
          <S.SubmitButton variant="text" onClick={toggleOffModalState} type="submit">
            {modalState.type === "post" ? ADD_BTN : MODIFY_BTN}
          </S.SubmitButton>
        </Grid>
      </S.ButtonContainer>
    </S.Container>
  );
}

export default MakeThemePageView;
