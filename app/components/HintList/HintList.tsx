import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";

import { ListItemIcon, ListItemText } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useGetHintList } from "@/queries/getHintList";
import { HintItem } from "../HintItem";

import HintManager from "../HintManager/HintManager";
import { DeleteHintDialog } from "../DeleteHintDialog";

import { useSelectedThemeValue } from "../atoms/selectedTheme.atom";

import * as S from "./HintList.styled";

function HintList() {
  const [isMakeEnabled, setIsMakeEnabled] = useState<boolean>(false);
  const [isModifyEnableds, setIsModifyEnableds] = useState<number[]>([]);
  const { id: themeId } = useSelectedThemeValue();
  const { data: hints = [], isLoading = false } = useGetHintList({ themeId });
  const hintsLength = hints.length;

  useEffect(() => {
    setIsModifyEnableds([]);
    setIsMakeEnabled(false);
  }, [themeId]);

  const getOpenedModify = (id: number) =>
    !!isModifyEnableds.find((modifyEnables) => modifyEnables === id);

  const closeModify = (id: number) => {
    const enableds = isModifyEnableds.filter((prevId) => prevId !== id);

    setIsModifyEnableds(enableds);
  };

  const handleModify = (id: number) => {
    if (getOpenedModify(id)) {
      closeModify(id);
    } else {
      setIsModifyEnableds((prev) => [...prev, id]);
    }
  };

  const $AddHintButton = useMemo(() => {
    if (hintsLength > 0 || isMakeEnabled) {
      return null;
    }

    return (
      <S.Empty onClick={() => setIsMakeEnabled(true)}>
        <Image
          src="/images/svg/plus.svg"
          width={12}
          height={12}
          alt="새로운 힌트 추가하기"
        />
        새로운 힌트 추가하기
      </S.Empty>
    );
  }, [hintsLength, isMakeEnabled]);

  const $AddHintFloatingButton = useMemo(
    () => (
      <S.FloatButton
        onClick={() => setIsMakeEnabled(true)}
        active={hintsLength > 0 && !isMakeEnabled}
      >
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText>새로운 힌트 추가하기</ListItemText>
      </S.FloatButton>
    ),
    [hintsLength, isMakeEnabled]
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <S.HintListWrapper>
      <S.Header>
        <div className="smallHeader">힌트코드</div>
        <div className="smallHeader">진행률</div>
        <div className="largeHeader">힌트 내용</div>
        <div className="largeHeader">정답</div>
      </S.Header>
      {$AddHintButton}
      {$AddHintFloatingButton}
      <HintManager
        active={isMakeEnabled}
        close={() => setIsMakeEnabled(false)}
        type="make"
      />
      {hints.reverse().map(({ id, hintCode, contents, answer, progress }) => (
        <div key={`item-${themeId}-${id}`}>
          <HintItem
            id={id}
            hintCode={hintCode}
            contents={contents}
            answer={answer}
            progress={progress}
            onClick={() => handleModify(id)}
          />
          <HintManager
            id={id}
            active={getOpenedModify(id)}
            close={() => closeModify(id)}
            type="modify"
            hintData={{ hintCode, contents, answer, progress }}
          />
        </div>
      ))}
      <DeleteHintDialog />
    </S.HintListWrapper>
  );
}

export default HintList;
