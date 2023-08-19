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
import { useModalState } from "@/components/atoms/modals.atom";
import { useSelectedThemeWrite } from "@/components/atoms/selectedTheme.atom";
import { Theme, Themes } from "@/queries/getThemeList";
import Image from "next/image";
import { getShopName } from "@/uilts/localStorage";
import Link from "next/link";

import * as S from "./DrawerView.styled";

type Props = {
  categories: Themes;
  handleDialog: () => void;
};

function MainDrawer(props: Props) {
  const { categories, handleDialog } = props;
  const setSelectedTheme = useSelectedThemeWrite();
  // const { mutateAsync: deleteTheme } = useDeleteTheme();
  const shopName = getShopName();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [modalState, setModalState] = useModalState();
  const toggleOnModalState = () =>
    setModalState({ type: "post", isOpen: true });

  const logoProps = {
    src: "/images/svg/logo.svg",
    alt: "NEXT ROOM",
    width: 184,
    height: 26,
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
    setSelectedTheme({ ...theme });
    // toggleOffModalState();

    if (modalState.isOpen) {
      handleDialog();
    }
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
        <S.ShopNameListItem>
          <S.ShopName color="inherit">
            {shopName?.replaceAll(`"`, "")}
          </S.ShopName>
        </S.ShopNameListItem>

        {[...categories].reverse().map((theme) => (
          <Link
            key={theme.id}
            href={{
              pathname: "/home/",
              query: { title: theme.title },
            }}
            style={{ textDecorationLine: "none" }}
          >
            <ListItem>
              <ListItemButton
                selected={selectedIndex === theme.id}
                onClick={() => {
                  handleListItemClick(theme);
                }}
              >
                <ListItemText>{theme.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
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
