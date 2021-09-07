import { createTheme, ThemeProvider } from "@material-ui/core";
import { ReactElement, useMemo, useState } from "react";

import { ThemeContext } from "../contexts/ThemeContext";
import { themes } from "../types/ThemeTypes";

export default function ThemeProviderWrapper(props: {
  children: ReactElement;
}) {
  const [currentTheme, setCurrentTheme] = useState<themes>(themes.light);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: currentTheme,
        },
      }),
    [currentTheme]
  );

  return (
    <ThemeContext.Provider value={{ theme, setCurrentTheme, currentTheme }}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
