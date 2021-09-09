import { TextField, Button } from "@material-ui/core";
import { useCallback, useContext, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import { TranslationContext } from "../contexts/TranslationContext";
import { loginAction } from "../reducers/authReducer";
import {
  authRequest,
  loginRequest,
  registerRequest,
} from "../services/authService";
import { useAppDispatch } from "../store/hooks";

const FormContainer = styled.form`
  display: grid;
  gap: 15px;
  padding: 15px;
  width: 50%;
`;

export default function LoginFormComponent() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { loginForm } = useContext(TranslationContext).config;

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameInput = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setUserName(event.target.value);
    },
    [userName]
  );

  const handlePassInput = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [password]
  );

  const loginHandler = useCallback(() => {
    async function login() {
      const { token } = await loginRequest({
        email: userName,
        password: password,
      });
      const data = await authRequest(token);
      dispatch(loginAction({ email: userName, id: data.id }));
      history.push("/");
    }
    login();
  }, [userName, password]);

  const registerHandler = useCallback(() => {
    async function register() {
      const data = await registerRequest({
        email: userName,
        password: password,
      });
      dispatch(loginAction({ email: userName, id: data.id }));
      history.push("/");
    }
    register();
  }, [userName, password]);

  return (
    <FormContainer autoComplete="on">
      <TextField
        required={true}
        variant="outlined"
        size="small"
        label={loginForm.login}
        value={userName}
        onChange={handleUserNameInput}
      ></TextField>
      <TextField
        required={true}
        variant="outlined"
        size="small"
        label={loginForm.password}
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={handlePassInput}
      />
      <Button variant="contained" color="primary" onClick={loginHandler}>
        {loginForm.logIn}
      </Button>
      <Button color="primary" onClick={registerHandler}>
        {loginForm.register}
      </Button>
    </FormContainer>
  );
}
