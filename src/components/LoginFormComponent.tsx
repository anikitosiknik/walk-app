import { TextField, Button } from "@material-ui/core";
import { useFormik } from "formik";
import { useContext, useMemo } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import * as yup from "yup";

import { TranslationContext } from "../contexts/TranslationContext";
import { loginAction } from "../reducers/authReducer";
import { authRequest, loginRequest } from "../services/authService";
import { useAppDispatch } from "../store/hooks";
import { localVariables } from "../types/localStorageTypes";

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

  const validationSchema = useMemo(
    () =>
      yup.object({
        email: yup
          .string()
          .email(loginForm.emailTip)
          .required(loginForm.emailRequired),
        password: yup
          .string()
          .min(6, loginForm.passwordTip)
          .required(loginForm.passwordRequired),
      }),
    [loginForm]
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (credentials) => {
      const { token } = await loginRequest(credentials);
      localStorage.setItem(localVariables.authToken, token);
      const data = await authRequest(token);
      dispatch(loginAction({ email: credentials.email, id: data.id }));
      history.push("/");
    },
  });

  return (
    <FormContainer autoComplete="on" onSubmit={formik.handleSubmit}>
      <TextField
        required={true}
        variant="outlined"
        size="small"
        label={loginForm.login}
        id="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      ></TextField>
      <TextField
        required={true}
        variant="outlined"
        size="small"
        label={loginForm.password}
        type="password"
        autoComplete="current-password"
        id="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button variant="contained" color="primary" type="submit">
        {loginForm.logIn}
      </Button>
      <Button color="primary">{loginForm.register}</Button>
    </FormContainer>
  );
}
