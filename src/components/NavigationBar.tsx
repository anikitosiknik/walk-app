import { AppBar, Tab, Tabs, Toolbar } from "@material-ui/core";
import { useCallback, useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { TranslationContext } from "../contexts/TranslationContext";
import ThemeSwitcher from "./ThemeSwitcher";

const NavigationToolBar = styled(Toolbar)`
  justify-content: space-between;
`;

const NavigationTabs = styled(Tabs)`
  align-self: end;
`;

export default function NavigationBar() {
  const [tab, setTab] = useState(0);
  const { navigationBar } = useContext(TranslationContext).config;
  const changeTabsHandler = useCallback((event, value: number) => {
    setTab(value);
  }, []);

  return (
    <AppBar position="static">
      <NavigationToolBar>
        <NavigationTabs value={tab} onChange={changeTabsHandler}>
          <Tab label={navigationBar.home} component={Link} to={"/"} />
          <Tab label={navigationBar.profile} component={Link} to={"/profile"} />
        </NavigationTabs>
        <ThemeSwitcher />
      </NavigationToolBar>
    </AppBar>
  );
}
