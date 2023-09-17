import type { RepositoryError } from "./error";
import type { Result } from "./result";

import { loggingException } from "@/common/lib/log";

import {
  FetchMethodError,
  AuthorizationError,
  InternalError,
  ResponseParseError,
  NotFoundError,
} from "./error";
import { createErr, createOk } from "./result";

const API_ENDPOINT = process.env["NEXT_PUBLIC_API_ENDPOINT"];

export const fetcher = (path: string, init?: RequestInit | undefined) =>
  fetch(`${API_ENDPOINT}${path}`, {
    ...init,
  });

export const callApi = async (
  path: string,
  init?: RequestInit
): Promise<Result<unknown, RepositoryError>> => {
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
    loggingException(error);
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
        loggingException(error);
        return createErr(error);
      }
      case 404: {
        const error = new NotFoundError(
          JSON.stringify({
            reason: "resource was not found",
            path,
            res,
          })
        );
        loggingException(error);
        return createErr(error);
      }
      // TODO: Not found error
      default: {
        const error = new InternalError(
          JSON.stringify({
            reason: "internal server error",
            path,
            res,
          })
        );
        loggingException(error);
        return createErr(error);
      }
    }
  }

  const is204 = res.status === 204;
  const isContentJson = res.headers
    .get("Content-Type")
    ?.includes("application/json");

  if (is204 || !isContentJson) return createOk(null);

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
    loggingException(error);
    return createErr(error);
  }

  return createOk(data);
};
