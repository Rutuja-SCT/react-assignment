import { ChatBubbleOutline, NotificationsNone } from '@mui/icons-material'
import { Badge, IconButton } from '@mui/material'
import React from 'react'
import { useThemeContext } from '../../../utils/themeContext/ThemeContext';

const Notification = ({}) => {
  const { isDarkMode, toggleTheme } = useThemeContext();
  const isNewMessage = true;
  const isNewNotification = true;
  return (
          <div style={{ display: "flex", gap: "12px" }}>
          {/* Chat Icon with Badge */}
          <IconButton sx={{ color: isDarkMode ? "white" : "white" }}>
            <Badge color="error" variant="dot" invisible={!isNewMessage}>
              <ChatBubbleOutline />
            </Badge>
          </IconButton>
  
          {/* Notification Icon with Badge */}
          <IconButton sx={{ color: isDarkMode ? "white" : "white" }}>
            <Badge color="error" variant="dot" invisible={!isNewNotification}>
              <NotificationsNone />
            </Badge>
          </IconButton>
        </div>
  )
}

export default Notification
