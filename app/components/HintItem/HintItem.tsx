import React from "react";

// eslint-disable-next-line import/no-cycle
import HintItemView from "./HintItemView";

type Props = {
  id: number;
  hintCode: string;
  contents: string;
  answer: string;
  progress: number;
};

export type HintData = {
  progress: number;
  hintCode: string;
  contents: string;
  answer: string;
};

function HintItem(props: Props) {
  const { id, hintCode, contents, answer, progress } = props;

  const hintData = {
    progress,
    hintCode,
    contents,
    answer,
  };

  const HintManageListItemProps = {
    id,
    hintData,
  };

  return <HintItemView {...HintManageListItemProps} />;
}

export default HintItem;
