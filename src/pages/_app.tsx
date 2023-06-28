import "@/styles/globals.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppContext, AppProps } from "next/app";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { ThemeOptions } from "@/types/themes";
import { lightTheme } from "@/themes/theme-light";
import { darkTheme } from "@/themes/theme-dark";
interface Props extends AppProps {
  theme: ThemeOptions;
}
export default function App({ Component, pageProps }: Props) {
  const [currentTheme, setCurrentTheme] = useState<ThemeOptions>(
    ThemeOptions.LIGHT
  );

  useEffect(() => {
    const cookieTheme: ThemeOptions =
      (Cookies.get("theme") as ThemeOptions) || ThemeOptions.LIGHT;
    setCurrentTheme(cookieTheme);
    
  }, []);

  const themes = {
    LIGHT: lightTheme,
    DARK: darkTheme,
  };

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
