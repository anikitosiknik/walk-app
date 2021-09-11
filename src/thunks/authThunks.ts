import { loginAction } from "../reducers/authReducer";
import { loginRequest } from "../services/authService";
import { UserCredentialsInterfce } from "../types/authTypes";
import { localVariables } from "../types/localStorageTypes";
import { AppThunkAction } from "../types/storeTypes";

export const loginThunk = (
  credentials: UserCredentialsInterfce
): AppThunkAction => {
  return async function (dispatch): Promise<boolean> {
    let token;
    try {
      token = (await loginRequest(credentials)).token;
    } catch {
      return false;
    }
    localStorage.setItem(localVariables.authToken, token);
    dispatch(loginAction({ email: credentials.email }));
    return true;
  };
};
