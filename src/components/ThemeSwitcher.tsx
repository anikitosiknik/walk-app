import { Button, ButtonGroup } from "@material-ui/core";
import { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../contexts/ThemeContext";
import { TranslationContext } from "../contexts/TranslationContext";
import { themes } from "../types/ThemeTypes";

const ThemeSwitcherStyled = styled(ButtonGroup)`
  margin: 15px;
  align-self: end;
`;
export default function ThemeSwitcher() {
  const langConfig = useContext(TranslationContext).config;

  return (
    <ThemeContext.Consumer>
      {({ currentTheme, setCurrentTheme }) => (
        <ThemeSwitcherStyled variant="contained">
          <Button
            onClick={() => setCurrentTheme(themes.light)}
            color="secondary"
            disabled={currentTheme === themes.light}
          >
            {langConfig.themeSwitcher.light}
          </Button>
          <Button
            onClick={() => setCurrentTheme(themes.dark)}
            color="secondary"
            disabled={currentTheme === themes.dark}
          >
            {langConfig.themeSwitcher.dark}
          </Button>
        </ThemeSwitcherStyled>
      )}
    </ThemeContext.Consumer>
  );
}
