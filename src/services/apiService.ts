import localStoreService from "./localStoreService";

export function getRequest(route: string, config?: RequestInit) {
  return request(route, config || {});
}

export const authorizedGetRequest = authorizeDecorator(
  getRequest
) as typeof getRequest;

export function postRequest(route: string, body: unknown) {
  return request(route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

export const authorizedPostRequest = authorizeDecorator(
  postRequest
) as typeof postRequest;

export const putRequest = authorizeDecorator((route: string, body: unknown) => {
  return request(route, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
});

export const deleteRequest = authorizeDecorator(
  (route: string, config?: RequestInit) => {
    return request(route, {
      ...config,
      method: "DELETE",
    });
  }
);

function request(route: string, config?: RequestInit) {
  return fetch(`${process.env.REACT_APP_API_ROUTE}${route}`, config || {});
}

function authorizeDecorator(callback: typeof request): typeof request {
  return function (route: string, config?: RequestInit) {
    const authToken = localStoreService.authToken;
    if (!authToken) {
      throw new Error("no token");
    }
    return callback(route, {
      ...config,
      headers: {
        ...config?.headers,
        Authorization: `Bearer ${authToken}`,
      },
    });
  };
}
