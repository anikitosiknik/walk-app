import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { useAppSelector } from "../store/hooks";
import LoginPageComponent from "./LoginPageComponent";
import NavigationBar from "./NavigationBar";
import UnauthorizedPageComponent from "./UnauthorizedPageComponent";

export default function RouterComponent() {
  const email = useAppSelector((state) => state.user.email);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/login"
          render={() => {
            return email ? (
              <Redirect to={{ pathname: "/" }} />
            ) : (
              <LoginPageComponent />
            );
          }}
        />
        <Route
          exact
          path="/"
          render={() => {
            return email ? (
              <NavigationBar />
            ) : (
              <Redirect to={{ pathname: "/unauthorized" }} />
            );
          }}
        />
        <Route exact path="/unauthorized">
          <UnauthorizedPageComponent />
        </Route>
      </Switch>
    </Router>
  );
}
