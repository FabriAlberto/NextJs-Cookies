import { ThemeOptions } from "@/types/themes";
import { ThemeState } from "./themeProvider";

export enum ThemeActionsName {
  EDIT_THEME = "EDIT_THEME",
}
type ThemeActionType = {
  type: ThemeActionsName.EDIT_THEME;
  payload: ThemeOptions;
};

export const ThemeReducer = (
  state: ThemeState,
  action: ThemeActionType
): ThemeState => {
  switch (action.type) {
    case ThemeActionsName.EDIT_THEME: {
      return {
        ...state,
        theme: action.payload,
      };
    }

    default:
      return state;
  }
};
