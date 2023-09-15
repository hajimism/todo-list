import type { RepositoryError } from "@/common/lib/error";
import { callApi } from "@/common/lib/fetcher";
import type { Result } from "@/common/lib/result";
import { isErr, unwrapOk } from "@/common/lib/result";

import type { Todo } from "@/model/todo/";
import { safeParseToTodoList } from "@/model/todo/lib/parse";

export const getTodos = async (): Promise<Result<Todo[], RepositoryError>> => {
  const fetchResult = await callApi("/todos");

  if (isErr(fetchResult)) return fetchResult;

  return safeParseToTodoList(unwrapOk(fetchResult));
};
