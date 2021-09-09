import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { useAppSelector } from "../store/hooks";
import LoginPageComponent from "./LoginPageComponent";
import NavigationBar from "./NavigationBar";

export default function RouterComponent() {
  const id = useAppSelector((state) => state.user.id);

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginPageComponent />
        </Route>
        <Route
          path="/"
          render={() => {
            return id ? (
              <NavigationBar />
            ) : (
              <Redirect to={{ pathname: "/login" }} />
            );
          }}
        ></Route>
      </Switch>
    </Router>
  );
}
