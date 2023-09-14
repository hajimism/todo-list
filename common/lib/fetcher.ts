import {
  RepositoryError,
  FetchMethodError,
  AuthorizationError,
  InternalError,
  ResponseParseError,
} from "./error";
import { Result, createErr, createOk } from "./result";

const API_ENDPOINT = process.env["NEXT_PUBLIC_API_ENDPOINT"];

export const fetcher = (path: string, init?: RequestInit | undefined) =>
  fetch(`${API_ENDPOINT}${path}`, {
    ...init,
  });

export const callApi = async (
  path: string,
  init?: RequestInit
): Promise<Result<any, RepositoryError>> => {
  let res;
  try {
    res = await fetcher(path, init);
  } catch (e) {
    const error = new FetchMethodError(
      JSON.stringify({
        reason: "failed to fetch",
        path,
      }),
      { cause: e }
    );
    return createErr(error);
  }

  if (!res.ok) {
    switch (res.status) {
      case 401: {
        const error = new AuthorizationError(
          JSON.stringify({
            reason: "failed to fetch by miisng auth",
            path,
            res,
          })
        );
        return createErr(error);
      }
      default: {
        const error = new InternalError(
          JSON.stringify({
            reason: "internal server error",
            path,
            res,
          })
        );
        return createErr(error);
      }
    }
  }

  let data;
  try {
    data = await res.json();
  } catch (e) {
    const error = new ResponseParseError(
      JSON.stringify({
        reason: "failed to parse",
        path,
      }),
      { cause: e }
    );
    return createErr(error);
  }

  return createOk(data);
};
