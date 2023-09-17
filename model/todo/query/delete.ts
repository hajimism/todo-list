import type { RepositoryError } from "@/common/lib/error";
import { callApi } from "@/common/lib/fetcher";
import { createOk, isErr, type Result } from "@/common/lib/result";

import { TODO_API_ENDPOINT } from "@/model/todo/query/key";
import type { Todo } from "@/model/todo/type";

export const deleteTodo = async ({
  id,
}: Pick<Todo, "id">): Promise<Result<null, RepositoryError>> => {
  const fetchResult = await callApi(`${TODO_API_ENDPOINT}/${id}`, {
    method: "DELETE",
  });

  if (isErr(fetchResult)) return fetchResult;

  return createOk(null);
};
