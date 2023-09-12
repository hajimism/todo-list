import { createContext, useContext } from "react";

import { MOCK_TODOS } from "../mock";
import { Todo } from "../type";

export const TodoContext = createContext<Todo>(MOCK_TODOS[0]!);

export const useTodoContext = () => useContext(TodoContext);
