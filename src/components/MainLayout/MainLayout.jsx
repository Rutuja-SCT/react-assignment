import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { Box } from "@mui/material";


const MainLayout = ({
  childComponent,
  isSidebar = true,
  isTopNavigation = true,
}) => {
  return (
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            position: "relative",
            backgroundColor: "background.primary",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          {/* Sidebar */}
          {isSidebar && <Sidebar />}
    
          {/* Main Content */}
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              position: "relative",
              zIndex: 0,
              overflow: "hidden",
            }}
          >
            {/* Top Navbar */}
            {isTopNavigation && <Navbar />}
    
            {/* Main Content */}
            <Box sx={{ flex: 1, width: "100%",overflow: "auto", }}>{childComponent}</Box>
          </Box>
        </Box>
      );
    
};

export default MainLayout;
