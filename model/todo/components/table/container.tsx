"use client";

import { isErr, unwrapOk } from "@/common/lib/result";

import { useGetTodos } from "@/model/todo/hooks/get";

import { p } from "@/styles/typography";

import { TodoTable } from ".";

export const TodoTableContainer = () => {
  const { data: result } = useGetTodos();

  if (!result) {
    return <p className={p()}>Loading...</p>;
  }

  if (isErr(result)) {
    return <p className={p()}>Sorry, something went wrong...</p>;
  }

  const todos = unwrapOk(result);

  return <TodoTable todos={todos} />;
};
