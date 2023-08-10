import React from "react";
import { HOME_TITLE } from "@/consts/home";
import AddIcon from "@mui/icons-material/Add";
import { useModalStateWrite } from "@/components/atoms/modals.atom";
import * as S from "./EmptyHomeView.styled";

function EmptyHomeView() {
  const setModalState = useModalStateWrite();
  const toggleOnModalState = () => {
    setModalState({ type: "post", isOpen: true });
  };

  return (
    <S.Wrapper>
      <S.Title><pre>{HOME_TITLE}</pre></S.Title>
      <S.AddButton onClick={toggleOnModalState} startIcon={<AddIcon />}>
        새로운 테마 추가하기
      </S.AddButton>
    </S.Wrapper>
  );
}

export default EmptyHomeView;
