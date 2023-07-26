import React from "react";
import { Stack } from "@mui/material";
import { Hints } from "@/queries/getHintList";
import { HintManageListItem } from "../HintManageListItem";

interface Props {
  hints: Hints;
  adding: boolean;
}

function HintManageListView(props: Props) {
  const { hints = [], adding } = props;

  return (
    <Stack spacing={3}>
      <Stack direction="column">
        {adding && <div>힌트 추가 화면</div>}
        {hints.map(({ id, hintCode, contents, answer, progress }) => (
          <HintManageListItem
            id={id}
            hintCode={hintCode}
            contents={contents}
            answer={answer}
            progress={progress}
          />
        ))}
      </Stack>
    </Stack>
  );
}

export default HintManageListView;
