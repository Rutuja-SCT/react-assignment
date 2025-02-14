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
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        height: "100vh",
        width: "100%",
        backgroundColor: "background.default",
      }}
    >
      <Box sx={{width: "100vw",position:"fixed", top:0,zIndex:1000}}>{isTopNavigation && <Navbar />}</Box>  
      {/* Main Content */}
      <Box sx={{ display: "flex", flexDirection: "row",height:"100vh",marginTop:isTopNavigation?"64px":"0px"}}>
          <Box sx={{}}>{isSidebar && <Sidebar />}</Box>
          <Box sx={{p:3}}>{childComponent}</Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
