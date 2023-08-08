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
    setModalState({ type: "post", isOpen: true });
  const logoProps = {
    src: "/images/svg/logo.svg",
    alt: "NEXT ROOM",
    width: 223,
    height: 41,
  };

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  useEffect(() => {
    if (categories.length > 0) {
      setSelectedIndex(categories[categories.length - 1].id);
      setSelectedTheme(categories[categories.length - 1]);
    }
  }, [categories, setSelectedTheme]);

  const handleListItemClick = (theme: Theme) => {
    setSelectedIndex(theme.id);
    // deleteTheme({id: theme.id})
    setSelectedTheme({ ...theme });
  };

  return (
    <S.Wrapper>
      <List>
        <Box>
          <ListItem>
            <S.LogoWrapper>
              <Image {...logoProps} />
            </S.LogoWrapper>
          </ListItem>
        </Box>
        <Box>
          <ListItem>
            <ListItemText>
              <S.Theme color="inherit">관리 중인 테마</S.Theme>
            </ListItemText>
          </ListItem>

          {[...categories].reverse().map((theme) => (
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
    </S.Wrapper>
  );
}

export default MainDrawer;
