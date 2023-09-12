import { isDefined } from "remeda";

import { TableCell } from "@/common/components/ui/table";

import { useTodoContext } from "@/model/todo/hooks/context";

import { UserAvatar } from "@/model/user/components/avatar";

export const TodoAssigneeCell = () => {
  const todo = useTodoContext();

  return (
    <TableCell>
      {isDefined(todo.assignee) && <UserAvatar user={todo.assignee} />}
    </TableCell>
  );
};
