import { useAtom } from "jotai";
import { useCallback } from "react";

import type { Todo, TodoAssignee, TodoDueTo, TodoStatus } from "@/model/todo/";
import { todoFamily } from "@/model/todo/atom";
import {
  patchTodoAssignee,
  patchTodoDueTo,
  patchTodoStatus,
} from "@/model/todo/query/patch";

export const useEditTodoItem = (todo: Todo) => {
  const [state, setState] = useAtom(todoFamily(todo));

  // Unlike other setters, setTitle does not call patchTodoTitle.
  // This is intentionally designed to allow for debouncing the title updates.
  // The actual API call for updating the title should be handled separately.
  const setTitle = useCallback(
    (title: string) => {
      setState((prev) => ({ ...prev, title }));
    },
    [setState]
  );

  const setStatus = useCallback(
    async (status: TodoStatus) => {
      setState((prev) => ({ ...prev, status }));
      const result = await patchTodoStatus(todo.id, status);
      return result;
    },
    [setState, todo.id]
  );

  const setDueTo = useCallback(
    async (dueTo: TodoDueTo) => {
      setState((prev) => ({ ...prev, dueTo }));
      const result = await patchTodoDueTo(todo.id, dueTo);
      return result;
    },
    [setState, todo.id]
  );

  const setAssignee = useCallback(
    async (assignee: TodoAssignee) => {
      setState((prev) => ({ ...prev, assignee }));
      const result = await patchTodoAssignee(todo.id, assignee);
      return result;
    },
    [setState, todo.id]
  );

  const dispose = useCallback(() => {
    todoFamily.remove(todo);
  }, [todo]);

  return {
    todo: state,
    setTitle,
    setStatus,
    setDueTo,
    setAssignee,
    dispose,
  };
};
