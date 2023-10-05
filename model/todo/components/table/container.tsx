"use client";

import { isErr, unwrapOk } from "@/common/lib/result";

import { TodoTableLoading } from "@/model/todo/components/table/loading";
import { TodoTableView } from "@/model/todo/components/table/view";
import { useGetTodos } from "@/model/todo/hooks/";

import { p } from "@/styles/typography";

export const TodoTableContainer = () => {
  const { data: result } = useGetTodos();

  if (!result) {
    return <TodoTableLoading />;
  }

  if (isErr(result)) {
    return <p className={p()}>Sorry, something went wrong...</p>;
  }

  const todos = unwrapOk(result);

  return <TodoTableView todos={todos} />;
};
