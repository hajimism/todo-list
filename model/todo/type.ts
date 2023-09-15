import type { Input } from "@/common/lib/schema";
import {
  array,
  coerce,
  date,
  enumType,
  object,
  optional,
  string,
} from "@/common/lib/schema";

import { UserSchema } from "@/model/user";

export const TodoStatusSchema = enumType(["todo", "doing", "done"]);
export const TodoAssigneeSchema = optional(UserSchema);
export const TodoDueToSchema = optional(
  coerce(date(), (i) => new Date(i as string))
);

export const TodoSchema = object({
  id: string(),
  title: string(),
  status: TodoStatusSchema,
  assignee: TodoAssigneeSchema,
  dueTo: TodoDueToSchema,
});

export const TodoListSchema = array(TodoSchema);

export type TodoStatus = Input<typeof TodoStatusSchema>;
export type TodoAssignee = Input<typeof TodoAssigneeSchema>;
export type TodoDueTo = Input<typeof TodoDueToSchema>;

export type Todo = Input<typeof TodoSchema>;
