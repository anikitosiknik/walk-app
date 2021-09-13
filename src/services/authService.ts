import {
  UserCredentialsInterfce,
  LoginResponseInterface,
} from "../types/authTypes";
import { postRequest } from "./apiService";

export async function loginRequest(config: UserCredentialsInterfce) {
  return postRequest("/login", config)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(response.statusText);
    })
    .then((res) => res.json()) as Promise<LoginResponseInterface>;
}
