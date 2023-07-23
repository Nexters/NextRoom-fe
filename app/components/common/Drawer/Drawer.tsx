/* eslint-disable */

import {
  Box,
  DrawerProps,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { FC, useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import CircleIcon from "@mui/icons-material/Circle";
import { useModalState } from "@/components/atoms/modals.atom";
import { useThemeStateWrite } from "@/components/atoms/theme.atom";
import { useThemeState } from "@/components/atoms/theme.atom";

const MainDrawer: FC<DrawerProps> = (props) => {
  const { onClose, categories } = props;
  const setTheme = useThemeStateWrite();
  
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

  const handleListItemClick = (title: string, timeLimit:number) => {
    setSelectedIndex(title);
    setTheme({title:title, timeLimit: timeLimit})
    onClose?.({}, "backdropClick");
  };

  return (
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

        {categories?.map(({ id, title, timeLimit }) => (
          <ListItem key={id}>
            <ListItemButton
              selected={selectedIndex == title}
              onClick={() => handleListItemClick(title, timeLimit)}
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
  );
};

export default MainDrawer;
