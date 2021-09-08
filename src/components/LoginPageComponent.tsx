import { Card } from "@material-ui/core";
import { useContext } from "react";
import styled from "styled-components";

import dark from "../assets/darkbg.jpeg";
import light from "../assets/lightbg.jpeg";
import { ThemeContext } from "../contexts/ThemeContext";
import { themes } from "../types/ThemeTypes";
import FindUsComponent from "./FindUsComponent";
import LoginFormComponent from "./LoginFormComponent";

const LoginPageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const LoginFormContainer = styled(Card)`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FindUsContainer = styled(Card)`
  width: 50%;
  display: flex;
  background-image: url(${(props: { theme: themes }) =>
    props.theme === themes.dark ? dark : light});
`;

export default function LoginPageComponent() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <LoginPageContainer>
      <FindUsContainer theme={currentTheme} square>
        <FindUsComponent />
      </FindUsContainer>
      <LoginFormContainer square>
        <LoginFormComponent />
      </LoginFormContainer>
    </LoginPageContainer>
  );
}
