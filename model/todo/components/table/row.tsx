import type { FC } from "react";

import { TableRow } from "@/common/components/ui/table";

import {
  TodoTitleCell,
  TodoStatusCell,
  TodoDueToCell,
  TodoAssigneeCell,
  TodoRemoveCell,
} from "@/model/todo/components/table/cell";
import { TodoContext } from "@/model/todo/hooks";
import type { Todo } from "@/model/todo/type";

type Props = {
  todo: Todo;
};

export const TodoTableRow: FC<Props> = ({ todo }) => {
  return (
    <TodoContext.Provider value={todo}>
      <TableRow>
        <TodoTitleCell />
        <TodoStatusCell />
        <TodoDueToCell />
        <TodoAssigneeCell />
        <TodoRemoveCell />
      </TableRow>
    </TodoContext.Provider>
  );
};
