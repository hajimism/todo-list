"use client";

import { useCallback } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/common/components/ui/select";
import { TableCell } from "@/common/components/ui/table";

import { useTodoContext } from "@/model/todo/hooks/context";
import { usePatchTodo } from "@/model/todo/hooks/patch";

import { UserAvatar } from "@/model/user/components/avatar";
import { useAllCollaborator } from "@/model/user/hooks/allCollaborator";

export const TodoAssigneeCell = () => {
  const todoContext = useTodoContext();
  const { todo, setAssignee } = usePatchTodo(todoContext);
  const allCollaborator = useAllCollaborator();

  const onSelect = useCallback(
    (userId: string) => {
      const assignee = allCollaborator.find(({ id }) => id === userId);
      setAssignee(assignee);
    },
    [allCollaborator, setAssignee],
  );

  return (
    <TableCell>
      <Select
        value={todo.assignee?.id ?? "not selected"}
        onValueChange={onSelect}
      >
        <SelectTrigger>
          <SelectValue placeholder="Assginee" />
        </SelectTrigger>
        <SelectContent>
          {allCollaborator.map((user) => (
            <SelectItem key={user.id} value={user.id}>
              <div className="flex items-center gap-4">
                <UserAvatar user={user} className="h-8 w-8" />
                <span>{user.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </TableCell>
  );
};
