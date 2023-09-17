import type { RepositoryError } from "@/common/lib/error";
import { callApi } from "@/common/lib/fetcher";
import type { Result } from "@/common/lib/result";
import { isErr, unwrapOk } from "@/common/lib/result";

import type { Todo } from "@/model/todo/";
import { safeParseToTodoList } from "@/model/todo/lib/parse";
import { TODO_API_ENDPOINT } from "@/model/todo/query/key";

export type TodosQueryResult = Result<Todo[], RepositoryError>;

export const getTodos = async (): Promise<TodosQueryResult> => {
  const fetchResult = await callApi(TODO_API_ENDPOINT, {
    cache: "no-store",
  });

  if (isErr(fetchResult)) return fetchResult;

  return safeParseToTodoList(unwrapOk(fetchResult));
};
