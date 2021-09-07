import { AppBar } from "@material-ui/core";

import ThemeSwitcher from "./ThemeSwitcher";

export default function NavigationBar() {
  return (
    <AppBar position="static">
      <ThemeSwitcher />
    </AppBar>
  );
}
