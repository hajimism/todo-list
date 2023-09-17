import type { RepositoryError } from "@/common/lib/error";
import { callApi } from "@/common/lib/fetcher";
import { isErr, unwrapOk, type Result } from "@/common/lib/result";

import { safeParseToTodo } from "@/model/todo/lib/parse";
import { TODO_API_ENDPOINT } from "@/model/todo/query/key";
import type { Todo } from "@/model/todo/type";

export const addTodo = async (
  todo: Todo
): Promise<Result<Todo, RepositoryError>> => {
  const fetchResult = await callApi(`${TODO_API_ENDPOINT}`, {
    method: "POST",
    body: JSON.stringify(todo),
  });

  if (isErr(fetchResult)) return fetchResult;

  return safeParseToTodo(unwrapOk(fetchResult));
};
