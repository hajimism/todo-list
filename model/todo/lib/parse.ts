import { safeParse } from "@/common/lib/schema";

import { TodoSchema } from "@/model/todo/";

export function safeParseToTodo(input: unknown) {
  return safeParse(TodoSchema, input);
}
