import { useCallback, useContext } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import { TranslationContext } from "../contexts/TranslationContext";
import InfoComponent from "./RedirectComponent";

const UnauthorizedContainer = styled.div`
  height: 100vh;
`;

export default function UnauthorizedPageComponent() {
  const history = useHistory();
  const { unauthorizedPage } = useContext(TranslationContext).config;

  const goToLoginHandler = useCallback(() => {
    history.push("/login");
  }, []);

  return (
    <UnauthorizedContainer>
      <InfoComponent
        header={unauthorizedPage.unauthorized}
        hint={unauthorizedPage.oopsText}
        buttonText={unauthorizedPage.goToLogin}
        buttonCallback={goToLoginHandler}
      />
    </UnauthorizedContainer>
  );
}
