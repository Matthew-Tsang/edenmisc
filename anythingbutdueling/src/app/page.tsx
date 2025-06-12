"use client";

import { createTheme, ThemeProvider } from "@mui/material";
import CardlePage from "./CardlePage";

declare module "@mui/material/styles" {
    interface Theme {
        shadowing: {
            shadowOutline: string;
            shadowOutlineBlur: string;
        };
    }
    interface ThemeOptions {
        shadowing?: {
            shadowOutline?: string;
            shadowOutlineBlur: string;
        };
    }
}

export const theme = createTheme({
    typography: {
        fontFamily: "JosefinSans",
    },
    shadowing: {
        shadowOutline: "0.05em 0 black, 0 0.05em black, -0.05em 0 black, 0 -0.05em black, -0.05em -0.05em black, -0.05em 0.05em black, 0.05em -0.05em black, 0.05em 0.05em black;",
        shadowOutlineBlur: "2px 2px 6px rgba(0,0,0,0.8), -2px 2px 6px rgba(0,0,0,0.8), -2px -2px 6px rgba(0,0,0,0.8), 2px -2px 6px rgba(0,0,0,0.8);",
    },
});

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <CardlePage></CardlePage>
        </ThemeProvider>
    );
}
