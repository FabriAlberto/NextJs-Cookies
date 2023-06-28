import { ReactElement, useReducer } from "react";
import { ThemeContext } from "./themeContext";
import { ThemeOptions } from "@/types/themes";
import { ThemeActionsName, ThemeReducer } from "./themeReducer";

export type ThemeState = {
  theme: ThemeOptions;
};

const THEME_INITIAL_STATE: ThemeState = {
  theme: ThemeOptions.LIGHT,
};
type Props = {
  children: ReactElement;
};

const ThemeProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(ThemeReducer, THEME_INITIAL_STATE);
  
  const setTheme=(theme:ThemeOptions)=>{
    dispatch({type:ThemeActionsName.EDIT_THEME,payload:theme})
  }
 


  return (
    <ThemeContext.Provider
      value={{
        ...state,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
