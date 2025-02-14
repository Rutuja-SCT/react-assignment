import { FunctionComponent, useState, useCallback, useEffect } from "react";
import { useAppSelector } from "../../utils/redux/store";
import { userSelector } from "../../utils/redux/slices/userSlice";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Typography,
  Menu,
  MenuItem,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ProfileDropdown from "./Profile/ProfileDropdown";
import AddProduct from "./Profile/AddProduct";
import Notification from "./Profile/Notification";
import Logo from "./Profile/Logo";

const Navbar = ({ className = "" }) => {
  const loginUser = useAppSelector(userSelector.loginUserDetails);

  const [profileDropdownPopupOpen, setProfileDropdownPopupOpen] =
    useState(false);
  const [clubNavOpen, setClubNavOpen] = useState(false);

  const openClubNav = useCallback(() => {
    setClubNavOpen(true);
  }, []);

  const closeClubNav = useCallback(() => {
    setClubNavOpen(false);
  }, []);

  const openProfileDropdownPopup = useCallback(() => {
    setProfileDropdownPopupOpen(true);
  }, []);

  const closeProfileDropdownPopup = useCallback(() => {
    setProfileDropdownPopupOpen(false);
  }, []);
  const [anchorEl, setAnchorEl] = useState(null);
  const profileDropdownOpen = Boolean(anchorEl);

  return (
    <>
      <AppBar
        position="static"
        sx={{
          boxShadow: "0px 2px 3px rgba(163, 155, 141, 0.32)",
          backgroundColor: "back.main",
          zIndex: 50,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "1.25rem",
        }}
        className={className}
      >
        <IconButton edge="start" color="inherit">
          <Logo />
        </IconButton>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left Side - Logo & Menu */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          ></div>
          <AddProduct />
          <Notification />
          {/* Right Side - Profile */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Typography variant="body2" color="textPrimary">
              {loginUser?.name}
            </Typography>
            <IconButton
              onClick={(event) => setAnchorEl(event.currentTarget)}
              color="inherit"
            >
              <ArrowDropDownIcon />
            </IconButton>
            <Avatar
              src={loginUser?.profilePicUr}
              sx={{ width: 38, height: 38 }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
