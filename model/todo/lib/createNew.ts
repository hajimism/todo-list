import { generateId } from "@/common/lib/generateId";

import type { Todo } from "@/model/todo/";

export const createNewTodo = (): Todo => ({
  id: generateId(),
  title: "",
  status: "todo",
  dueTo: undefined,
});
