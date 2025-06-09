'use client'

import { createTheme, ThemeProvider } from "@mui/material";
import CardlePage from "./CardlePage";

declare module '@mui/material/styles' {
  interface Theme {
    shadowing: {
      shadowOutline: string;
    };
  }
  interface ThemeOptions {
    shadowing?: {
      shadowOutline?: string;
    }
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: "JosefinSans",
  },
  shadowing:{
    shadowOutline: "0.05em 0 black, 0 0.05em black, -0.05em 0 black, 0 -0.05em black, -0.05em -0.05em black, -0.05em 0.05em black, 0.05em -0.05em black, 0.05em 0.05em black;"
  }
});

export default function Home() {

  return (
    <ThemeProvider theme={theme}>
      <CardlePage></CardlePage>
    </ThemeProvider>
  );
}
