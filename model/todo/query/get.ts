import { RepositoryError } from "@/common/lib/error";
import { Result, createOk } from "@/common/lib/result";

import type { Todo } from "@/model/todo/";
import { MOCK_TODOS } from "@/model/todo/mock";

export const getTodos = async (): Promise<Result<Todo[], RepositoryError>> => {
  return Promise.resolve(createOk(MOCK_TODOS));
};
