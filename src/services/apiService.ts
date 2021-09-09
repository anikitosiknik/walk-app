import { checkError, handleError } from "../utils/errorHelper";
import localStoreService from "./localStoreService";

export function anonymPostRequest(route: string, body: unknown) {
  return request(route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

export function authorizedPostRequest(route: string, body: unknown) {
  return authorizedRequest(route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

export function authorizedGetRequest(route: string) {
  return authorizedRequest(route, {});
}

export function anonymGetRequest(route: string) {
  return request(route, {});
}

function request(route: string, config: RequestInit) {
  return fetch(`${process.env.REACT_APP_API_ROUTE}${route}`, config)
    .then(checkError)
    .then((response) => response.json())
    .catch(handleError);
}

function authorizedRequest(route: string, config: RequestInit) {
  const authToken = localStoreService.getAuthToken();
  if (!authToken) {
    throw new Error("no token");
  }
  config.headers = {
    ...config?.headers,
    Authorization: `Bearer ${localStoreService.getAuthToken()}`,
  };
  return request(route, config);
}
