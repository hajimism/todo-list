import { useAtom } from "jotai";
import { useCallback } from "react";

import { todoFamily } from "../atom";
import { Todo, TodoAssignee, TodoDueTo, TodoStatus } from "../type";

// TODO: API作成後、useMutationを用いる
export const usePatchTodo = (todo: Todo) => {
  const [state, setState] = useAtom(todoFamily(todo));

  const setTitle = useCallback(
    (title: string) => {
      setState((prev) => ({ ...prev, title }));
    },
    [setState],
  );

  const setStatus = useCallback(
    (status: TodoStatus) => {
      setState((prev) => ({ ...prev, status }));
    },
    [setState],
  );

  const setDueTo = useCallback(
    (dueTo: TodoDueTo) => {
      setState((prev) => ({ ...prev, dueTo }));
    },
    [setState],
  );

  const setAssignee = useCallback(
    (assignee: TodoAssignee) => {
      setState((prev) => ({ ...prev, assignee }));
    },
    [setState],
  );

  return { todo: state, setTitle, setStatus, setDueTo, setAssignee };
};
