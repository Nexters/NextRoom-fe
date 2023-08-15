import React from "react";

// eslint-disable-next-line import/no-cycle
import HintItemView from "./HintItemView";

type Props = {
  id: number;
  hintCode: string;
  contents: string;
  answer: string;
  progress: number;
  onClick: () => void;
};

export type HintData = {
  progress: number;
  hintCode: string;
  contents: string;
  answer: string;
};

function HintItem(props: Props) {
  const { id, hintCode, contents, answer, progress, onClick } = props;

  const hintData = {
    progress,
    hintCode,
    contents,
    answer,
  };

  const HintManageListItemProps = {
    id,
    hintData,
    onClick,
  };

  return <HintItemView {...HintManageListItemProps} />;
}

export default HintItem;
