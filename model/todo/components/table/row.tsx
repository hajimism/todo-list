"use client";

import { Suspense, type FC } from "react";

import { TableRow } from "@/common/components/ui/table";

import {
  TodoTitleCell,
  TodoStatusCell,
  TodoDueToCell,
  TodoRemoveCell,
} from "@/model/todo/components/table/cell";
import { TodoAssigneeCellContainer } from "@/model/todo/components/table/cell/assignee.container";
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
        <Suspense>
          <TodoAssigneeCellContainer />
        </Suspense>
        <TodoRemoveCell />
      </TableRow>
    </TodoContext.Provider>
  );
};
