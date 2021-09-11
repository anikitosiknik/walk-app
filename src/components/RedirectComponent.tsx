import { Button, Card, Typography } from "@material-ui/core";
import { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../contexts/ThemeContext";
import { RedirectComponentPropsType } from "../types/componentPropsTypes";
import { themes } from "../types/ThemeTypes";

const RedirectContainer = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: ${({ theme }: { theme: themes }) =>
    theme === themes.light ? "#fff" : "#424242"};
`;

const HeaderContainer = styled.div`
  padding: 15px;
  border-radius: 5px;
  background-color: ${({ theme }: { theme: themes }) =>
    theme === themes.light ? "rgba(0, 0, 0, 0.08)" : "#303030"};
`;

export default function RedirectComponent({
  header,
  hint,
  buttonText,
  buttonCallback,
}: RedirectComponentPropsType) {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <RedirectContainer theme={currentTheme}>
      <HeaderContainer theme={currentTheme}>
        <Typography variant="h1">{header}</Typography>
      </HeaderContainer>
      <Typography variant="body1">{hint}</Typography>
      <Button
        size="large"
        variant="contained"
        onClick={buttonCallback}
        color="primary"
      >
        {buttonText}
      </Button>
    </RedirectContainer>
  );
}
