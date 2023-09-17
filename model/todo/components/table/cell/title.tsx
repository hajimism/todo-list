"use client";

import type { ChangeEventHandler } from "react";

import { useCallback } from "react";

import { Input } from "@/common/components/ui/input";
import { TableCell } from "@/common/components/ui/table";

import { useTodoContext, useEditTodoItem } from "@/model/todo/hooks";

export const TodoTitleCell = () => {
  const todoContext = useTodoContext();
  const { todo, setTitle } = useEditTodoItem(todoContext);

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setTitle(e.target.value);
    },
    [setTitle]
  );

  return (
    <TableCell className='font-medium'>
      <Input value={todo.title} onChange={onChange} />
    </TableCell>
  );
};
