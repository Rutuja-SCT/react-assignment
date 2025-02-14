import { Inbox } from "@mui/icons-material";
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import SidebarSubItem from "./SidebarSubItem";
import { SideBarItems } from "../../../utils/constants/data";

const SidebarItem = ({ key, text, icon, open, subitems,active }) => {
    const [subOpen, setSubOpen] = useState(false); // State to control the subitems' open/close
  
  
    const handleSubItemClick = () => {
      setSubOpen(!subOpen);
    };  
    return (
      <List key={key}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem disablePadding sx={active?{backgroundColor:""}:{backgroundColor:"primary"}}>
              <ListItemButton onClick={handleSubItemClick}> {/* Toggle subitems */}
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            <Collapse in={subOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {subitems.map((subitem, index) => (
                  <SidebarSubItem key={index} text={subitem}/>
                ))}
              </List>
            </Collapse>
          </List>
        </Collapse>
      </List>
)};
export default SidebarItem