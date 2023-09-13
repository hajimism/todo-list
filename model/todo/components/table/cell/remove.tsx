"use client";

import { Trash2 } from "lucide-react";
import { FC, useCallback } from "react";

import { Button } from "@/common/components/ui/button";
import { TableCell } from "@/common/components/ui/table";

import { useEditTodoItem } from "@/model/todo/hooks";
import { useTodoContext } from "@/model/todo/hooks/context";
import { Todo } from "@/model/todo/type";

type Props = {
  onRemove: (_todo: Pick<Todo, "id">) => void;
};

export const TodoRemoveCell: FC<Props> = ({ onRemove }) => {
  const todoContext = useTodoContext();
  const { todo, removeTodo } = useEditTodoItem(todoContext);

  const onClick = useCallback(() => {
    onRemove(todo);
    removeTodo();
  }, [onRemove, removeTodo, todo]);

  return (
    <TableCell className='font-medium'>
      <Button variant='ghost' className='px-2' onClick={onClick}>
        <Trash2 className='text-muted-foreground' />
      </Button>
    </TableCell>
  );
};
