import { is } from "@/common/lib/schema";

import { Todo, TodoSchema } from "../type";

export function isTodo(input: unknown): input is Todo {
  return is(TodoSchema, input);
}
