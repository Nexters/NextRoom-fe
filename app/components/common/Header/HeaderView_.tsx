import React from "react";
import * as S from "./HeaderView_.styled";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  iconProps: Record<string, any>;
};

function HeaderView({ iconProps }: Props) {
  return (
    <S.Wrapper>
      <S.Icon {...iconProps} />
    </S.Wrapper>
  );
}

export default HeaderView;
