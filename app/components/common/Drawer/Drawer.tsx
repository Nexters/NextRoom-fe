/* eslint-disable */

import {
  Box,
  Drawer,
  DrawerProps,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { FC, useState, useEffect } from "react";
import Home from "@/components/Home/Home";

// import { Link, useLocation } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import HomeIconOutlined from "@mui/icons-material/HomeOutlined";
import InfoIcon from "@mui/icons-material/Info";
import InfoIconOutlined from "@mui/icons-material/InfoOutlined";

import PeopleIcon from "@mui/icons-material/PeopleOutline";
import PermMediaOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import PublicIcon from "@mui/icons-material/PublicOutlined";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernetOutlined";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponentOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import PaletteTwoToneIcon from "@mui/icons-material/Palette";
import AddIcon from "@mui/icons-material/Add";
import CircleIcon from "@mui/icons-material/Circle";
import { useModalState } from "@/components/atoms/modals.atom";

const MainDrawer: FC<DrawerProps> = (props) => {
  const { onClose, categories } = props;
  const [modalState, setModalState] = useModalState();

  const toggleOnModalState = () => setModalState(true);
  const toggleOffModalState = () => setModalState(false);

  const Link = "";

  // const location = useLocation();
  //   const [selectedIndex, setSelectedIndex] = useState(location.pathname.replace('/', ''));
  const [selectedIndex, setSelectedIndex] = useState("");

  //   useEffect(() => {
  //     setSelectedIndex(location.pathname.replace("/", ""));
  //   }, [location.pathname]);

  const handleListItemClick = (index: string) => {
    setSelectedIndex(index);
    onClose?.({}, "backdropClick");
  };
  return (
    <>
      <List
        sx={{
          maxWidth: 360,
          height: "100vh",
          flexShrink: 0,
        }}
        variant="permanent"
        anchor="right"
      >
        <Box>
          <ListItem>
            <ListItemText>Logo Img</ListItemText>
          </ListItem>
        </Box>
        <Box>
          <ListItem sx={{ py: 2, px: 3 }}>
            <ListItemText sx={{ fontWeight: "bold" }}>
              <Typography
                color="inherit"
                sx={{ ml: 1, fontSize: 15, fontWeight: 500 }}
              >
                우리지점테마
              </Typography>
            </ListItemText>
          </ListItem>

          {categories.map(({ id, title }) => (
            <ListItem key={id}>
              <ListItemButton
                selected={selectedIndex == id}
                onClick={handleListItemClick}
              >
                <ListItemIcon>
                  <CircleIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>{title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem>
            <ListItemButton
              // selected={selectedIndex == childId}
              onClick={toggleOnModalState}
            >
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText>새로운 테마 추가하기</ListItemText>
            </ListItemButton>
          </ListItem>
        </Box>
      </List>
    </>
  );
};

export default MainDrawer;
