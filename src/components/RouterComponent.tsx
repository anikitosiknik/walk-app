import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { useAppSelector } from "../store/hooks";
import ErrorPageComponent from "./ErrorPageComponent";
import LoginPageComponent from "./LoginPageComponent";
import NavigationBar from "./NavigationBar";
import UnauthorizedPageComponent from "./UnauthorizedPageComponent";
import UsersPageComponent from "./UsersPageComponent";

export default function RouterComponent() {
  const email = useAppSelector((state) => state.user.email);

  return (
    <Router>
      {email ? <NavigationBar /> : null}
      <Switch>
        <Route exact path="/login">
          {email ? <Redirect to={{ pathname: "/" }} /> : <LoginPageComponent />}
        </Route>
        <Route exact path="/">
          {email ? (
            <UsersPageComponent />
          ) : (
            <Redirect to={{ pathname: "/unauthorized" }} />
          )}
        </Route>
        <Route exact path="/unauthorized">
          <UnauthorizedPageComponent />
        </Route>
        <Route path="*">
          {email ? (
            <ErrorPageComponent />
          ) : (
            <Redirect to={{ pathname: "/unauthorized" }} />
          )}
        </Route>
      </Switch>
    </Router>
  );
}
