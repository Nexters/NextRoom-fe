import { Grid, TextField } from "@mui/material";
import { FieldError } from "react-hook-form";
import { useEffect } from "react";
import * as S from "./MakeThemePageView.styled";

interface Modal {
  isOpen: boolean;
  type: "post" | "put";
}
interface FormValues {
  id: number | undefined;
  title: string;
  timeLimit: number;
  hintLimit: number;
}

type Props = {
  formValue: FormValues;
  modalState: Modal;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formProps: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  timeLimitProps: Record<string, any>;
  themeNameProps: Record<string, any>;
  hintLimitProps: Record<string, any>;
  titleError: FieldError | undefined;
  timeLimitError: FieldError | undefined;
  hintLimitError: FieldError | undefined;
};

function MakeThemePageView(props: Props) {
  const ADD_BTN = "추가하기";
  const MODIFY_BTN = "수정하기";
  const {
    formValue,
    modalState,
    formProps,
    themeNameProps,
    timeLimitProps,
    hintLimitProps,
    titleError,
    timeLimitError,
    hintLimitError,
  } = props;
  useEffect(() => {
    console.log(formValue);
  }, [formValue]);

  return (
    <div>
      <S.CardWrap variant="outlined" {...formProps}>
        <S.TextWrapper>
          <TextField
            {...themeNameProps}
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            fullWidth
            error={!!titleError}
          />
          {titleError ? (
            <S.ErrorMention className=" text-rose-500 absolute left-4 top-12 text-xs mt-2">
              {titleError.message}
            </S.ErrorMention>
          ) : (
            <S.Description>{themeNameProps.message}</S.Description>
          )}
          <TextField
            {...timeLimitProps}
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            fullWidth
            error={!!timeLimitError}
          />
          {timeLimitError ? (
            <S.ErrorMention className=" text-rose-500 absolute left-4 top-12 text-xs mt-2">
              {timeLimitError.message}
            </S.ErrorMention>
          ) : (
            <S.Description>{timeLimitProps.message}</S.Description>
          )}
          <TextField
            {...hintLimitProps}
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            fullWidth
            error={!!hintLimitError}
          />
          {hintLimitError ? (
            <S.ErrorMention className=" text-rose-500 absolute left-4 top-12 text-xs mt-2">
              {hintLimitError.message}
            </S.ErrorMention>
          ) : (
            <S.Description>{hintLimitProps.message}</S.Description>
          )}
        </S.TextWrapper>
        <S.ButtonContainer container spacing={1}>
          <Grid item>
            <S.CancleButton
              variant="text"
              // onClick={() => setModalState({ ...modalState, isOpen: false })}
            >
              취소
            </S.CancleButton>
          </Grid>
          <Grid item>
            <S.SubmitButton
              variant="contained"
              type="submit"
              disabled={
                !formValue.hintLimit || !formValue.timeLimit || !formValue.title
              }
            >
              {modalState.type === "post" ? ADD_BTN : MODIFY_BTN}
            </S.SubmitButton>
          </Grid>
        </S.ButtonContainer>
      </S.CardWrap>
    </div>
  );
}

export default MakeThemePageView;
