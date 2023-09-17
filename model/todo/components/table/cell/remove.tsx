"use client";

import type { FC } from "react";

import { Trash2 } from "lucide-react";
import { useCallback } from "react";

import { useDialog } from "@/common/components/functional/dialog";
import { Button } from "@/common/components/ui/button";
import { TableCell } from "@/common/components/ui/table";
import { isErr } from "@/common/lib/result";

import {
  useTodoContext,
  useEditTodoItem,
  useDeleteTodo,
} from "@/model/todo/hooks";

export const TodoRemoveCell: FC = () => {
  const todoContext = useTodoContext();
  const { todo, dispose } = useEditTodoItem(todoContext);
  const { mutateAsync } = useDeleteTodo();
  const { openErrorDialog } = useDialog();

  const onClick = useCallback(async () => {
    const result = await mutateAsync(todo);
    if (isErr(result)) {
      openErrorDialog();
    } else {
      dispose();
    }
  }, [todo, mutateAsync, dispose, openErrorDialog]);

  return (
    <TableCell className='font-medium'>
      <Button variant='ghost' className='px-2' onClick={onClick}>
        <Trash2 className='text-muted-foreground' />
      </Button>
    </TableCell>
  );
};
