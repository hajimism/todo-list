import { atom } from "jotai";
import { atomFamily } from "jotai/vanilla/utils";

import type { Todo } from "@/model/todo/";

export const todoFamily = atomFamily(
  (param: Todo) => atom(param),
  (a, b) => a.id === b.id
);
