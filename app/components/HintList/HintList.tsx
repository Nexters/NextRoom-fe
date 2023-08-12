import React, { useMemo, useState } from "react";
import Image from "next/image";

import { ListItemIcon, ListItemText } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useGetHintList } from "@/queries/getHintList";
import { HintItem } from "../HintItem";

import MakeHint from "../MakeHint/MakeHint";

import { useSelectedThemeValue } from "../atoms/selectedTheme.atom";

import * as S from "./HintList.styled";
import { DeleteHintDialog } from "../DeleteHintDialog";

function HintList() {
  const [isAddEnabled, setIsAddEnabled] = useState<boolean>(false);
  const { id: themeId } = useSelectedThemeValue();
  const { data: hints = [], isLoading = false } = useGetHintList({ themeId });
  const hintsLength = hints.length;
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const $AddHintButton = useMemo(() => {
    if (hintsLength > 1 || isAddEnabled) {
      return null;
    }

    return (
      <S.Empty onClick={() => setIsAddEnabled(true)}>
        <Image
          src="/images/svg/plus.svg"
          width={12}
          height={12}
          alt="새로운 힌트 추가하기"
        />
        새로운 힌트 추가하기
      </S.Empty>
    );
  }, [hintsLength, isAddEnabled]);

  const $AddHintFloatingButton = useMemo(() => {
    if (hintsLength === 0 || isAddEnabled) {
      return null;
    }

    return (
      <S.FloatButton onClick={() => setIsAddEnabled(true)}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText>새로운 힌트 추가하기</ListItemText>
      </S.FloatButton>
    );
  }, [hintsLength, isAddEnabled]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <S.HintListWrapper>
      <S.Header>
        <div className="smallHeader">힌트코드</div>
        <div className="smallHeader">진행률</div>
        <div className="largeHeader">힌트 내용</div>
        <div className="largeHeader">정답 내용</div>
      </S.Header>
      {$AddHintButton}
      {$AddHintFloatingButton}
      <MakeHint active={isAddEnabled} close={() => setIsAddEnabled(false)} />
      {hints.map(({ id, hintCode, contents, answer, progress }) => (
        <HintItem
          id={id}
          hintCode={hintCode}
          contents={contents}
          answer={answer}
          progress={progress}
        />
      ))}
      {/* TODO: delete below dialog */}
      <DeleteHintDialog
        open={isDeleteModalOpen}
        handleClose={() => setIsDeleteModalOpen(false)}
        id={themeId}
      />
    </S.HintListWrapper>
  );
}

export default HintList;
