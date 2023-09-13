import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// eslint-disable-next-line import/no-extraneous-dependencies
import AddIcon from "@mui/icons-material/Add";
import { useModalState } from "@/components/atoms/modals.atom";
import { useSelectedThemeWrite } from "@/components/atoms/selectedTheme.atom";
import { Theme, Themes } from "@/queries/getThemeList";
import Image from "next/image";
import { getShopName } from "@/uilts/localStorage";
import Dialog from "@/components/common/Dialog/Dialog";

import * as S from "./DrawerView.styled";

type Props = {
  categories: Themes;
};

function MainDrawer(props: Props) {
  const { categories } = props;
  const router = useRouter();

  const setSelectedTheme = useSelectedThemeWrite();
  // const { mutateAsync: deleteTheme } = useDeleteTheme();
  const shopName = getShopName();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [modalState, setModalState] = useModalState();
  const toggleOnModalState = () => {
    router.push("/theme");

    setModalState({ type: "post", isOpen: true });
  };
  const logoProps = {
    src: "/images/svg/logo.svg",
    alt: "NEXT ROOM",
    width: 184,
    height: 26,
  };
  const [focusedTheme, setFocusedTheme] = useState<Theme|null>(null); // 현재 선택된 테마를 저장할 상태 추가

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleDialog = () => {
    setOpen(!open);
  };
  useEffect(() => {
    if (categories.length > 0) {
      setSelectedIndex(categories[categories.length - 1].id);
      setSelectedTheme(categories[categories.length - 1]);
    }
  }, [categories, setSelectedTheme]);

  const handleListItemClick = (theme: Theme) => {
    setFocusedTheme(theme);
    // setSelectedTheme({ ...theme });
    if (modalState.isOpen) {
      handleDialog();
    } else {
      setSelectedIndex(theme.id);
      setSelectedTheme({ ...theme });
      router.push(`/home?title=${encodeURIComponent(theme.title)}`);
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
          // </Link>
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
      <Dialog
        open={open}
        handleBtn={() => {
          if (focusedTheme) {
            setModalState({ ...modalState, isOpen: false });
            setSelectedIndex(focusedTheme.id);
            setSelectedTheme({ ...focusedTheme });
            router.push(`/home?title=${encodeURIComponent(focusedTheme.title)}`);
          }
        }}
        handleDialogClose={() => setOpen(false)}
        type={modalState.type === "post" ? "themePost" : "themePut"}
      />
    </S.ListWrap>
  );
}

export default MainDrawer;
