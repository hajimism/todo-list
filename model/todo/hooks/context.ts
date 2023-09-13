import { createContext, useContext } from "react";

import type { Todo } from "@/model/todo/";
import { MOCK_TODOS } from "@/model/todo/mock";

export const TodoContext = createContext<Todo>(MOCK_TODOS[0]!);

export const useTodoContext = () => useContext(TodoContext);
