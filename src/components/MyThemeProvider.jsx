import { createTheme, CssBaseline } from "@mui/material";
import { useState } from "react";

export default function MyThemeProvider({ children }) {
    const [mode, setMode] = useState('light');

    const themeConfig = {
        mode,
        toggleMode: () => {
            setMode(prev => prev === 'light' ? 'dark' : 'light');
        }
    }

    const theme = createTheme({});

    return (
        <ThemeContext.Provider value={themeConfig}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}