import {
  LoginInterface,
  LoginResponseInterface,
  RegisterResponseInterface,
} from "../types/authTypes";
import { anonymPostRequest } from "./apiService";

export async function registerRequest(config: LoginInterface) {
  return anonymPostRequest(
    "/register",
    config
  ) as Promise<RegisterResponseInterface>;
}

export async function loginRequest(config: LoginInterface) {
  return anonymPostRequest("/login", config) as Promise<LoginResponseInterface>;
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
