import React from "react";
import { Stack } from "@mui/material";
import { Hints } from "@/queries/getHintList";
import { HintManageListItem } from "../HintManageListItem";
import { HintAddForm } from "../HintAddForm";

interface Props {
  hints: Hints;
  adding: boolean;
  isLoading: boolean;
  hasNoHints: boolean;
}

function HintManageListView(props: Props) {
  const { hints = [], adding, isLoading, hasNoHints } = props;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasNoHints) {
    return <div>힌트가 없습니다.</div>;
  }

  return (
    <Stack spacing={3}>
      <Stack direction="column">
        {adding && <HintAddForm />}
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
