"use client";

import type { User } from "@/model/user";

import { useCallback, type FC } from "react";

import { useDialog } from "@/common/components/functional/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/common/components/ui/select";
import { TableCell } from "@/common/components/ui/table";
import { isErr } from "@/common/lib/result";

import { useEditTodoItem } from "@/model/todo/hooks";
import { useTodoContext } from "@/model/todo/hooks/context";

import { UserAvatar } from "@/model/user/components/avatar";

type Props = {
  users: User[];
};

export const TodoAssigneeCell: FC<Props> = ({ users }) => {
  const todoContext = useTodoContext();
  const { todo, setAssignee } = useEditTodoItem(todoContext);
  const { openErrorDialog } = useDialog();

  const onSelect = useCallback(
    async (userId: string) => {
      const assignee = users.find(({ id }) => id === userId);
      const result = await setAssignee(assignee);
      if (isErr(result)) {
        openErrorDialog();
      }
    },
    [openErrorDialog, setAssignee, users]
  );

  return (
    <TableCell>
      <Select
        value={todo.assignee?.id ?? "not selected"}
        onValueChange={onSelect}
      >
        <SelectTrigger>
          <SelectValue placeholder='Assginee' />
        </SelectTrigger>
        <SelectContent>
          {users.map((user) => (
            <SelectItem key={user.id} value={user.id}>
              <div className='flex items-center gap-4'>
                <UserAvatar user={user} className='h-8 w-8' />
                <span>{user.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </TableCell>
  );
};
