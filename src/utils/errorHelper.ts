export function checkError(response: Response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}

export function handleError(error: Error) {
  throw new Error(error.message);
}
