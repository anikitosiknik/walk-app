import {
  UserCredentialsInterfce,
  LoginResponseInterface,
  RegisterResponseInterface,
} from "../types/authTypes";
import { postRequest } from "./apiService";

export async function loginRequest(config: UserCredentialsInterfce) {
  return postRequest("/login", config).then((res) =>
    res.json()
  ) as Promise<LoginResponseInterface>;
}

export async function authRequest(token: string) {
  return new Promise((res, rej) => {
    if (token === "QpwL5tke4Pnpja7X4") {
      return res({
        id: 4,
        token,
      });
    }
    rej({
      status: 401,
    });
  }) as Promise<RegisterResponseInterface>;
}
