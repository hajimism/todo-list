import { atom } from "jotai";
import { atomFamily } from "jotai/vanilla/utils";
import { atomsWithQuery } from "jotai-tanstack-query";

import type { Todo } from "@/model/todo/";
import { getTodos, TODO_QUERY_KEY } from "@/model/todo/query";

export const todoFamily = atomFamily(
  (param: Todo) => atom(param),
  (a, b) => a.id === b.id
);

export const [todosAtom] = atomsWithQuery(() => ({
  queryKey: [TODO_QUERY_KEY.get],
  queryFn: getTodos,
}));
