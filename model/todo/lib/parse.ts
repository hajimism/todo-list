import { safeParse } from "@/common/lib/schema";

import { TodoSchema } from "../type";

export function safeParseToTodo(input: unknown) {
  return safeParse(TodoSchema, input);
}
