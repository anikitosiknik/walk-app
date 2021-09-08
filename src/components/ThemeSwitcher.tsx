import { Button, ButtonGroup } from "@material-ui/core";
import { useCallback, useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../contexts/ThemeContext";
import { TranslationContext } from "../contexts/TranslationContext";
import { themes } from "../types/ThemeTypes";

const ThemeSwitcherStyled = styled(ButtonGroup)`
  margin: 15px;
  align-self: end;
`;
export default function ThemeSwitcher() {
  const { themeSwitcher } = useContext(TranslationContext).config;
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

  const setLightTheme = useCallback(() => setCurrentTheme(themes.light), []);
  const setDarkTheme = useCallback(() => setCurrentTheme(themes.dark), []);

  return (
    <ThemeSwitcherStyled variant="contained">
      <Button
        onClick={setLightTheme}
        color="secondary"
        disabled={currentTheme === themes.light}
      >
        {themeSwitcher.light}
      </Button>
      <Button
        onClick={setDarkTheme}
        color="secondary"
        disabled={currentTheme === themes.dark}
      >
        {themeSwitcher.dark}
      </Button>
    </ThemeSwitcherStyled>
  );
}
