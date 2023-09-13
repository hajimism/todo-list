import { nanoid } from "nanoid";

import { Todo } from "../type";

export const createNewTodo = (): Todo => ({
  id: nanoid(),
  title: "",
  status: "todo",
  dueTo: undefined,
});
