import { useAtom } from "jotai";
import { useCallback } from "react";

import type { Todo, TodoAssignee, TodoDueTo, TodoStatus } from "@/model/todo/";
import { todoFamily } from "@/model/todo/atom";

export const useEditTodoItem = (todo: Todo) => {
  const [state, setState] = useAtom(todoFamily(todo));

  const setTitle = useCallback(
    (title: string) => {
      setState((prev) => ({ ...prev, title }));
    },
    [setState]
  );

  const setStatus = useCallback(
    (status: TodoStatus) => {
      setState((prev) => ({ ...prev, status }));
    },
    [setState]
  );

  const setDueTo = useCallback(
    (dueTo: TodoDueTo) => {
      setState((prev) => ({ ...prev, dueTo }));
    },
    [setState]
  );

  const setAssignee = useCallback(
    (assignee: TodoAssignee) => {
      setState((prev) => ({ ...prev, assignee }));
    },
    [setState]
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
