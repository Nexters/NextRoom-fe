import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import AddIcon from "@mui/icons-material/Add";
// eslint-disable-next-line import/no-extraneous-dependencies
import CircleIcon from "@mui/icons-material/Circle";
import { useModalState } from "@/components/atoms/modals.atom";
import { useSelectedThemeWrite } from "@/components/atoms/selectedTheme.atom";
import { Theme, Themes } from "@/queries/getThemeList";
import Image from "next/image";
import * as S from "./DrawerView.styled";
// import { useDeleteTheme } from "@/mutations/deleteTheme";

type Props = {
  categories: Themes;
};

function MainDrawer(props: Props) {
  const { categories } = props;
  const setSelectedTheme = useSelectedThemeWrite();
  // const { mutateAsync: deleteTheme } = useDeleteTheme();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [modalState, setModalState] = useModalState();
  const toggleOnModalState = () =>
    setModalState({ ...modalState, isOpen: true });
  const logoProps = {
    src: "/images/svg/logo.svg",
    alt: "오늘의 방탈출",
    width: 40,
    height: 40,
  };

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  useEffect(() => {
    if (categories.length > 0) {
      setSelectedIndex(categories[0].id);
      setSelectedTheme(categories[0]);
    }
  }, [categories, setSelectedTheme]);

  const handleListItemClick = (theme: Theme) => {
    setSelectedIndex(theme.id);
    // deleteTheme({id: theme.id})
    setSelectedTheme({ ...theme });
  };

  return (
    <List>
      <Box>
        <ListItem>
          <Image {...logoProps} />
          <S.Title>오늘의 방탈출</S.Title>
        </ListItem>
      </Box>
      <Box>
        <ListItem>
          <ListItemText>
            <S.Theme color="inherit">관리 중인 테마</S.Theme>
          </ListItemText>
        </ListItem>

        {categories.map((theme) => (
          <ListItem key={theme.id}>
            <ListItemButton
              selected={selectedIndex === theme.id}
              onClick={() => {
                handleListItemClick(theme);
              }}
            >
              <ListItemIcon>
                <CircleIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>{theme.title}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem>
          <ListItemButton onClick={toggleOnModalState}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText>새로운 테마 추가하기</ListItemText>
          </ListItemButton>
        </ListItem>
      </Box>
    </List>
  );
}

export default MainDrawer;
