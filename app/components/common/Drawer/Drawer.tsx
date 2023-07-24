import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import AddIcon from "@mui/icons-material/Add";
// eslint-disable-next-line import/no-extraneous-dependencies
import CircleIcon from "@mui/icons-material/Circle";
import { useModalState } from "@/components/atoms/modals.atom";
import { useThemeStateWrite } from "@/components/atoms/theme.atom";
import { Theme, Themes } from "@/queries/getThemeList";

// eslint-disable-next-line import/no-cycle

type Props = {
  categories: Themes;
};

function MainDrawer(props: Props) {
  const { categories } = props;
  const setTheme = useThemeStateWrite();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [modalState, setModalState] = useModalState();
  const toggleOnModalState = () => setModalState(true);

  const [selectedIndex, setSelectedIndex] = useState<string | null>(null);
  useEffect(() => {
    if (categories.length > 0) {
      setSelectedIndex(categories[0].title);
      setTheme(categories[0]);
    }
  }, [categories, setTheme]);

  const handleListItemClick = (theme: Theme) => {
    setSelectedIndex(theme.title);

    setTheme({ ...theme });
  };

  return (
    <List>
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

        {categories.map((theme) => (
          <ListItem key={theme.id}>
            <ListItemButton
              selected={selectedIndex === theme.title}
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
