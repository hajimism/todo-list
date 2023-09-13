import { RepositoryError } from "@/common/lib/error";
import { Result, createOk } from "@/common/lib/result";

import { MOCK_TODOS } from "../mock";
import { Todo } from "../type";

export const getTodos = async (): Promise<Result<Todo[], RepositoryError>> => {
  return Promise.resolve(createOk(MOCK_TODOS));
};
