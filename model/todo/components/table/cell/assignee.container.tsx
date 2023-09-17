"use client";

import type { FC } from "react";

import { isErr, unwrapOk } from "@/common/lib/result";

import { useGetUsers } from "@/model/user/hooks/get";

import { TodoAssigneeCell } from "./assignee";

export const TodoAssigneeCellContainer: FC = () => {
  const result = useGetUsers();

  if (!result) return <></>;
  if (isErr(result)) return <p className='text-destructive'>Error!!😵‍💫</p>;

  const users = unwrapOk(result);

  return <TodoAssigneeCell users={users} />;
};
