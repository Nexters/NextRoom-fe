import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { ChatBubbleOutline, Code, Done, Water } from "@mui/icons-material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ActiveInput, {
  ActiveInputProps,
} from "../common/ActiveInput/ActiveInput";

import * as S from "./HintManageListItemView.styled";

type Props = {
  id: number;
  contents: string;
  onDelete: () => void;
  progressInputProps: ActiveInputProps;
  hintCodeInputProps: ActiveInputProps;
  contentsInputProps: ActiveInputProps;
  answerInputProps: ActiveInputProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formProps: Record<string, any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  saveButtonProps: Record<string, any>;
};

const DELETE = "삭제하기";
const SAVE_MODIFIED_DATA = "변경사항 저장";

function HintManageListItemView(props: Props) {
  const {
    contents,
    onDelete,
    progressInputProps,
    hintCodeInputProps,
    contentsInputProps,
    answerInputProps,
    formProps,
    saveButtonProps,
  } = props;

  return (
    <Box {...formProps}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="inherit" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography color="inherit">
            <S.SummaryStack direction="row">
              <Stack direction="row">
                <S.CodeProgressWrapper>
                  <S.IconText>
                    <Water />
                    <ActiveInput {...progressInputProps} />
                  </S.IconText>
                  <S.IconText>
                    <Code />
                    <ActiveInput {...hintCodeInputProps} />
                  </S.IconText>
                </S.CodeProgressWrapper>
                <S.SummaryText>{contents}</S.SummaryText>
              </Stack>
            </S.SummaryStack>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="inherit">
            <S.DetailIconText>
              <ChatBubbleOutline />
              <ActiveInput {...contentsInputProps} />
            </S.DetailIconText>
            <S.DetailIconText>
              <Done />
              <ActiveInput {...answerInputProps} />
            </S.DetailIconText>
          </Typography>
          <S.ButtonsStack direction="row" spacing={3}>
            <Button onClick={onDelete}>{DELETE}</Button>
            <Button {...saveButtonProps}>{SAVE_MODIFIED_DATA}</Button>
          </S.ButtonsStack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default HintManageListItemView;
