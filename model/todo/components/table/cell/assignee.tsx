"use client";

import { useCallback, useMemo } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/common/components/ui/select";
import { TableCell } from "@/common/components/ui/table";

import { useEditTodoItem } from "@/model/todo/hooks";
import { useTodoContext } from "@/model/todo/hooks/context";

import { User } from "@/model/user/";
import { UserAvatar } from "@/model/user/components/avatar";
import { useAllCollaborator } from "@/model/user/hooks/allCollaborator";
import { useCurrentUser } from "@/model/user/hooks/currentUser";

export const TodoAssigneeCell = () => {
  const todoContext = useTodoContext();
  const { todo, setAssignee } = useEditTodoItem(todoContext);
  const allCollaborator = useAllCollaborator();
  const [currentUser] = useCurrentUser();

  const options: readonly User[] = useMemo(
    () => (currentUser ? [currentUser, ...allCollaborator] : allCollaborator),
    [allCollaborator, currentUser]
  );

  const onSelect = useCallback(
    (userId: string) => {
      const assignee = options.find(({ id }) => id === userId);
      setAssignee(assignee);
    },
    [options, setAssignee]
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
          {options.map((user) => (
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
