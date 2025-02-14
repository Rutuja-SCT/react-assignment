import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../utils/themeContext/ThemeContext";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ToggleButton,
  ToggleButtonGroup,
  Drawer as MuiDrawer,
} from "@mui/material";
import {
  DarkMode,
  LightMode,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Mail as MailIcon,
  MoveToInbox as InboxIcon,
} from "@mui/icons-material";
import SidebarItem from "./components/SidebarItem";
import ThemeToggle from "./components/ThemeToggle";
import { SideBarItems } from "../../utils/constants/data";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  marginTop: "64px",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open ? {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    } : {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  })
);
export default function Sidebar() {
  const { toggleTheme, isDarkMode } = useThemeContext();
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setOpen(window.innerWidth >= 960);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Box sx={{backgroundColor:"#F7F7F7 !important" }}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(!open)}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List >
          {SideBarItems.map((item,index)=><SidebarItem text={item.main} icon={item.icon} subitems={item.sub} key={index} open={open} active={index==0?true:false}/>)}
        </List>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
