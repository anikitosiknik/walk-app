import { useCallback, useContext } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import { TranslationContext } from "../contexts/TranslationContext";
import InfoComponent from "./RedirectComponent";

const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default function ErrorPageComponent() {
  const history = useHistory();
  const { errorPage } = useContext(TranslationContext).config;

  const goToLoginHandler = useCallback(() => {
    history.push("/");
  }, []);

  return (
    <ErrorPageContainer>
      <InfoComponent
        header={errorPage.errorHeader}
        hint={errorPage.oopsText}
        buttonText={errorPage.goToHome}
        buttonCallback={goToLoginHandler}
      />
    </ErrorPageContainer>
  );
}
