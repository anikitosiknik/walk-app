import { GetUsersResponseInterface } from "../types/usersTypes";
import { authorizedGetRequest } from "./apiService";

export function getUsersRequest(page: number) {
  return authorizedGetRequest(`/users?page=${page}`)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(response.statusText);
    })
    .then((res) => res.json()) as Promise<GetUsersResponseInterface>;
}
