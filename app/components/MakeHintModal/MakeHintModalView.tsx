import React from "react";
import * as S from "./MakeHintModalView.styled";
import { Box, TextField } from "@mui/material";
import MainDrawer from "../common/Drawer/Drawer";

type Props = {};

const MakeHintModalView = (props: Props) => {
  const formProps = {
    component: "form",
    noValidate: true,
    autoComplete: "off",
    onSubmit: () => {},
  };

  const textFieldProps = [
    {
      id: "hintName",
      label: "힌트 제목(필수)",
      placeholder: "입력해 주세요.",
      helperText: "관리를 위한 코드를 입력해 주세요.",
    },
    {
      id: "code",
      label: "코드(필수)",
      placeholder: "입력해 주세요.",
      helperText: "문제에 해당하는 코드를 입력해 주세요.",
    },
    {
      id: "progress",
      label: "진행률(필수)",
      placeholder: "입력해 주세요.",
      helperText: "tip: 10%, 70% 등 진행률을 입력해 주세요.",
    },
    {
      id: "description",
      label: "힌트 설명(필수)",
      placeholder: "입력해 주세요.",
    },
    {
      id: "answer",
      label: "정답",
      placeholder: "입력해 주세요.",
    },
  ];

  const TextFields = () => {
    return textFieldProps.map((props) => {
      return <TextField {...props} key={props.id} />;
    });
  };

  return (
    <S.Container>
      {/* <S.Title>힌트 만들기</S.Title>
      <S.ContentsWrapper>
        <Box {...formProps}>
          <TextFields />
        </Box>
      </S.ContentsWrapper> */}
      <MainDrawer open={true}>hello</MainDrawer>
    </S.Container>
  );
};

export default MakeHintModalView;
