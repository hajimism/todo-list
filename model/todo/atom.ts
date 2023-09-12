import { atom } from "jotai";
import { atomFamily } from "jotai/vanilla/utils";
import { atomsWithQuery } from "jotai-tanstack-query";

import { getTodos } from "./query";
import { Todo } from "./type";

export const todoFamily = atomFamily(
  (param: Todo) => atom(param),
  (a, b) => a.id === b.id,
);

export const [todosAtom] = atomsWithQuery(() => ({
  queryKey: ["todos"],
  queryFn: getTodos,
}));
