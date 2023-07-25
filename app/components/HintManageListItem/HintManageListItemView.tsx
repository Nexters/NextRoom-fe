import { ChatBubbleOutline, Code, Done, Water } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as S from "./HintManageListItemView.styled";

type Props = {
  id: number;
  hintCode: string;
  contents: string;
  answer: string;
  progress: number;
  onDelete: () => void;
  onSave: () => void;
};

const DELETE = "삭제하기";
const SAVE_MODIFIED_DATA = "변경사항 저장";

function HintManageListItemView(props: Props) {
  const { id, hintCode, contents, answer, progress, onDelete, onSave } = props;

  return (
    <Accordion key={id}>
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
                  {progress}
                </S.IconText>
                <S.IconText>
                  <Code />
                  {hintCode}
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
            {contents}
          </S.DetailIconText>
          <S.DetailIconText>
            <Done />
            {answer}
          </S.DetailIconText>
        </Typography>
        <S.ButtonsStack direction="row" spacing={3}>
          <Button onClick={onDelete}>{DELETE}</Button>
          <Button variant="contained" disabled onClick={onSave}>
            {SAVE_MODIFIED_DATA}
          </Button>
        </S.ButtonsStack>
      </AccordionDetails>
    </Accordion>
  );
}

export default HintManageListItemView;
