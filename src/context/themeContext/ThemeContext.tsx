import { ThemeOptions } from "@/types/themes";
import { createContext, useContext } from "react";

type ContextProps = {
  theme: ThemeOptions;
  setTheme:(theme:ThemeOptions)=>void;
  
};
export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeContext = createContext({} as ContextProps);
