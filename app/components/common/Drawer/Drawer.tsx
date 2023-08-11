import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
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
import { getShopName } from "@/uilts/localStorage";
import * as S from "./DrawerView.styled";

type Props = {
  categories: Themes;
};

function MainDrawer(props: Props) {
  const { categories } = props;
  const setSelectedTheme = useSelectedThemeWrite();
  // const { mutateAsync: deleteTheme } = useDeleteTheme();
  const shopName = getShopName();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [modalState, setModalState] = useModalState();
  const toggleOnModalState = () =>
    setModalState({ type: "post", isOpen: true });
  const toggleOffModalState = () =>
    setModalState({ type: "post", isOpen: false });

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
    toggleOffModalState();
  };

  return (
<S.ListWrap>
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
            <S.ShopName color="inherit">{shopName?.replaceAll(`"`, "")}</S.ShopName>
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
        <ListItem
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "14px",
          }}
        >
          <Button onClick={toggleOnModalState}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText>새로운 테마 추가하기</ListItemText>
          </Button>
        </ListItem>
      </Box>
    </S.ListWrap>
  );
}

export default MainDrawer;
