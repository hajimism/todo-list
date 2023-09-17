"use client";

import type { ChangeEventHandler } from "react";

import { useCallback, useEffect } from "react";

import { useDialog } from "@/common/components/functional/dialog";
import { Input } from "@/common/components/ui/input";
import { TableCell } from "@/common/components/ui/table";
import { useDebounce } from "@/common/hooks/debounce";
import { isErr } from "@/common/lib/result";

import { useTodoContext, useEditTodoItem } from "@/model/todo/hooks";
import { patchTodoTitle } from "@/model/todo/query/patch";

export const TodoTitleCell = () => {
  const todoContext = useTodoContext();
  const { todo, setTitle } = useEditTodoItem(todoContext);
  const { openErrorDialog } = useDialog();
  const debouncedTitle = useDebounce(todo.title);

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setTitle(e.target.value);
    },
    [setTitle]
  );

  useEffect(() => {
    const debouncedRequest = async () => {
      const result = await patchTodoTitle(todo.id, debouncedTitle);
      if (isErr(result)) {
        openErrorDialog();
      }
    };
    debouncedRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedTitle]);

  return (
    <TableCell className='font-medium'>
      <Input value={todo.title} onChange={onChange} />
    </TableCell>
  );
};
