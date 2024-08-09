import { createTheme, CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { useState } from "react";

export default function MaterialMode() {
    const [mode, setMode] = useState('light');
    const toggleMode = () => setMode(prev => prev === 'light' ? 'dark' : 'light');

    const theme = createTheme({
        palatte: {
            mode,
            ...(mode === 'light'
                ? {
                    primary: amber,
                }
                : {
                    primary: {
                        main: grey[500],
                        contrastText: '#fff'
                    },
                    background: {
                        default: grey[900],
                        paper: grey[900],
                    },
                }
            ),
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <button variant='contained' onClick={toggleMode}>
                Mode {mode}
            </button>
        </ThemeProvider>
    );
}