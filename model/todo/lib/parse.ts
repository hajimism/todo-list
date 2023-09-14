import { safeParse } from "@/common/lib/schema";

import { TodoListSchema, TodoSchema } from "@/model/todo/";

export function safeParseToTodo(input: unknown) {
  return safeParse(TodoSchema, input);
}

export function safeParseToTodoList(input: unknown) {
  return safeParse(TodoListSchema, input);
}
