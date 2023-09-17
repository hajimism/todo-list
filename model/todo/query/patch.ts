import { callApi } from "@/common/lib/fetcher";
import { isErr, createOk } from "@/common/lib/result";

import { TODO_API_ENDPOINT } from "@/model/todo/query/key";
import type { Todo } from "@/model/todo/type";

export const patchTodo = async (id: Todo["id"], todo: Partial<Todo>) => {
  const fetchResult = await callApi(`${TODO_API_ENDPOINT}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(todo),
  });

  if (isErr(fetchResult)) return fetchResult;

  return createOk(null);
};

export const patchTodoTitle = async (id: Todo["id"], title: Todo["title"]) =>
  await patchTodo(id, { title });

export const patchTodoStatus = async (id: Todo["id"], status: Todo["status"]) =>
  await patchTodo(id, { status });

export const patchTodoAssignee = async (
  id: Todo["id"],
  assignee: Todo["assignee"]
) => await patchTodo(id, { assignee });

export const patchTodoDueTo = async (id: Todo["id"], dueTo: Todo["dueTo"]) =>
  await patchTodo(id, { dueTo });
