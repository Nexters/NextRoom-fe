import React from "react";

import * as S from "./HintItemView.styled";
// eslint-disable-next-line import/no-cycle
import { HintData } from "./HintItem";

type Props = {
  id: number;
  hintData: HintData;
};

function HintItemView(props: Props) {
  const { hintData, id } = props;

  return (
    <S.ItemWrapper key={id}>
      <div className="numberBox">{hintData.hintCode}</div>
      <div className="numberBox">{hintData.progress}</div>
      <div className="textBox">{hintData.contents}</div>
      <div className="textBox">{hintData.contents}</div>
    </S.ItemWrapper>
  );
}

export default HintItemView;
