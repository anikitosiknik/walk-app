import { createTheme } from "@material-ui/core";
import React from "react";

import { themes } from "../types/ThemeTypes";

export const ThemeContext = React.createContext({
  theme: createTheme({
    palette: {
      type: themes.light,
    },
  }),
  currentTheme: themes.light,
  setCurrentTheme: (theme: themes) => {
    theme;
  },
});
