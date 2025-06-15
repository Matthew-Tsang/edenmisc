"use client";

import { createTheme, ThemeProvider } from "@mui/material";
import CardlePage from "./CardlePage";

declare module "@mui/material/styles" {
    interface Theme {
        shadowing: {
            shadowOutline: string;
            shadowOutlineBlur: string;
        };
        breakpoints: {
            values: {
                mobile: number;
                tablet: number;
                laptop: number;
                desktop: number;
                xs: number;
                sm: number;
                md: number;
                lg: number;
                xl: number;
                xxl: number;
            };
        };
    }
    interface ThemeOptions {
        shadowing?: {
            shadowOutline?: string;
            shadowOutlineBlur: string;
        };
        breakpoints?: {
            values?: {
                mobile?: number;
                tablet?: number;
                laptop?: number;
                desktop?: number;
                xs: number;
                sm: number;
                md: number;
                lg: number;
                xl: number;
                xxl: number;
            };
        };
    }
    interface BreakpointOverrides {
        xs: true; // removes the `xs` breakpoint
        sm: true;
        md: true;
        lg: true;
        xl: true;
        xxl: true;
        mobile: true; // adds the `mobile` breakpoint
        tablet: true;
        laptop: true;
        desktop: true;
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
    breakpoints: {
        values: {
            mobile: 470,
            tablet: 720,
            laptop: 1140,
            desktop: 1270,
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1500,
            xxl: 1743,
        },
    },
});

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <CardlePage></CardlePage>
        </ThemeProvider>
    );
}
