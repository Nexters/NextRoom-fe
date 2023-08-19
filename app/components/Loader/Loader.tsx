import React from "react";
import Lottie from "react-lottie-player";
import loaderJson from "../../../public/lottie/loader.json";
import * as S from "./Loader.styled";

type Props = {
  // eslint-disable-next-line react/require-default-props
  isLoading?: boolean;
};

function Loader(props: Props) {
  const { isLoading = true } = props;

  if (!isLoading) return null;

  return (
    <S.LoaderWrapper>
      <Lottie
        loop
        animationData={loaderJson}
        play
        style={{ width: 150, height: 150 }}
      />
    </S.LoaderWrapper>
  );
}

export default Loader;
