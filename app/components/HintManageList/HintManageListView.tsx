import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Hints } from "@/queries/getHintList";
import { ChatBubbleOutline, Code, Done, Water } from "@mui/icons-material";
import * as S from "./HintMangerListView.styled";

interface Props {
  hints: Hints;
  onDelete: () => void;
  onSave: () => void;
}

// type Editing = {
//   id: number;
//   contents: string;
//   answer: string;
// }[];

const DELETE = "삭제하기";
const SAVE_MODIFIED_DATA = "변경사항 저장";

function HintManageListView(props: Props) {
  const { hints = [], onDelete, onSave } = props;

  // const [editing, setEditing] = useState<Editing>([]);

  return (
    <Stack spacing={3}>
      <Stack direction="column">
        {hints.map(({ id, hintCode, contents, answer, progress }) => (
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
        ))}
      </Stack>
    </Stack>
  );
}

export default HintManageListView;
