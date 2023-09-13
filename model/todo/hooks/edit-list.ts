import { useCallback, useState } from "react";

import { Todo } from "@/model/todo/";
import { createNewTodo } from "@/model/todo/lib/createNew";

import { useCurrentUser } from "@/model/user/hooks/currentUser";

export const useEditTodos = (todos: Todo[]) => {
  const [todosState, setState] = useState(todos);
  const [currentUser] = useCurrentUser();

  const addTodo = useCallback(() => {
    const newTodo = createNewTodo();
    setState((prev) => [{ ...newTodo, assignee: currentUser }, ...prev]);
  }, [currentUser]);

  const removeTodo = useCallback(({ id }: Pick<Todo, "id">) => {
    setState((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { todosState, addTodo, removeTodo };
};
