import { is } from "@/common/lib/schema";

import { type Todo, TodoSchema } from "@/model/todo/";

export function isTodo(input: unknown): input is Todo {
  return is(TodoSchema, input);
}
