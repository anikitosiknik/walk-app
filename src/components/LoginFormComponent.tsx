import { TextField, Button, FormHelperText } from "@material-ui/core";
import { useFormik } from "formik";
import { useCallback, useContext, useMemo, useState, ChangeEvent } from "react";
import styled from "styled-components";
import * as yup from "yup";

import { TranslationContext } from "../contexts/TranslationContext";
import { useAppDispatch } from "../store/hooks";
import { loginThunk } from "../thunks/authThunks";

const FormContainer = styled.form`
  display: grid;
  gap: 15px;
  padding: 15px;
  width: 50%;
`;

export default function LoginFormComponent() {
  const dispatch = useAppDispatch();
  const { loginForm } = useContext(TranslationContext).config;
  const [showErrorMessage, setShowErrorMessage] = useState(false);

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
    onSubmit: async (credentials, { resetForm }) => {
      const isLoginSuccessful = (await dispatch(
        loginThunk(credentials)
      )) as unknown as boolean;
      if (isLoginSuccessful) {
        return;
      }
      setShowErrorMessage(true);
      resetForm();
    },
  });

  const handleFormInput = useCallback(
    (event: ChangeEvent) => {
      formik.handleChange(event);
      if (showErrorMessage) {
        setShowErrorMessage(false);
      }
    },
    [showErrorMessage]
  );

  return (
    <FormContainer autoComplete="on" onSubmit={formik.handleSubmit}>
      {showErrorMessage ? (
        <FormHelperText error>
          {loginForm.incorrectLoginOrPassword}
        </FormHelperText>
      ) : null}
      <TextField
        required={true}
        variant="outlined"
        size="small"
        label={loginForm.login}
        id="email"
        value={formik.values.email}
        onChange={handleFormInput}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        required={true}
        variant="outlined"
        size="small"
        label={loginForm.password}
        type="password"
        autoComplete="current-password"
        id="password"
        value={formik.values.password}
        onChange={handleFormInput}
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
