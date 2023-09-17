import type { RepositoryError } from "@/common/lib/error";
import { callApi } from "@/common/lib/fetcher";
import type { Result } from "@/common/lib/result";
import { isErr, unwrapOk } from "@/common/lib/result";

import type { User } from "@/model/user/";
import { safeParseToUserList } from "@/model/user/lib/parse";
import { USER_API_ENDPOINT } from "@/model/user/query/key";

export type UsersQueryResult = Result<User[], RepositoryError>;

export const getUsers = async (): Promise<UsersQueryResult> => {
  const fetchResult = await callApi(USER_API_ENDPOINT);

  if (isErr(fetchResult)) return fetchResult;

  return safeParseToUserList(unwrapOk(fetchResult));
};
