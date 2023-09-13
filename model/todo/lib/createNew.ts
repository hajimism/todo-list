import { generateId } from "@/common/lib/generateId";

import { Todo } from "../type";

export const createNewTodo = (): Todo => ({
  id: generateId(),
  title: "",
  status: "todo",
  dueTo: undefined,
});
