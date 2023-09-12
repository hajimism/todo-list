"use client";

import { FC } from "react";

import { TableRow } from "@/common/components/ui/table";

import { Todo } from "@/model/todo/";
import { TodoContext } from "@/model/todo/hooks/context";

import {
  TodoAssigneeCell,
  TodoDueToCell,
  TodoStatusCell,
  TodoTitleCell,
} from "./cell";

type Props = {
  todo: Todo;
};

export const TodoTableRow: FC<Props> = ({ todo }) => {
  return (
    <TodoContext.Provider value={todo}>
      <TableRow>
        <TodoTitleCell />
        <TodoStatusCell />
        <TodoAssigneeCell />
        <TodoDueToCell />
      </TableRow>
    </TodoContext.Provider>
  );
};
