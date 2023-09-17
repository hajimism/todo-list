import type { FC } from "react";

import { isErr, unwrapOk } from "@/common/lib/result";

import { getUsers } from "@/model/user/query";

import { TodoAssigneeCell } from "./assignee";

export const TodoAssigneeCellContainer: FC = async () => {
  const result = await getUsers();

  if (!result) return <></>;
  if (isErr(result)) return <p className='text-destructive'>Error!!😵‍💫</p>;

  const users = unwrapOk(result);

  return <TodoAssigneeCell users={users} />;
};
