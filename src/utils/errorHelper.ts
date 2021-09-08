export function checkError(response: Response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function handleError(error: Error) {
  throw console.warn(error);
}
