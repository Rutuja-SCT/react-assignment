import { DarkMode, LightMode } from "@mui/icons-material";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const ThemeToggle = ({ isDarkMode, toggleTheme }) => (
    <ToggleButtonGroup
      value={isDarkMode ? "dark" : "light"}
      exclusive
      onChange={toggleTheme}
      sx={{ backgroundColor: "background.paper", borderRadius: "20px", p: 0.5, boxShadow: 2, display: "inline-flex", flexDirection: "column" }}
    >
      <ToggleButton
        value="light"
        sx={{ borderRadius: "20px", textTransform: "none", width: "100%", justifyContent: "center", bgcolor: !isDarkMode ? "primary.main" : "transparent", color: !isDarkMode ? "white" : "text.primary", "&:hover": { bgcolor: "primary.dark", color: "black" } }}
      >
        <LightMode sx={{ mr: 1 }} />
      </ToggleButton>
      <ToggleButton
        value="dark"
        sx={{ borderRadius: "20px", textTransform: "none", width: "100%", justifyContent: "center", bgcolor: isDarkMode ? "primary.main" : "transparent", color: isDarkMode ? "white" : "text.primary", "&:hover": { bgcolor: "primary.dark", color: "white" } }}
      >
        <DarkMode sx={{ mr: 1 }} />
      </ToggleButton>
    </ToggleButtonGroup>
  );
  export default ThemeToggle