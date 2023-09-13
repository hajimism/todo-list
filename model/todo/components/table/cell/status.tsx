"use client";

import { CheckCircle2, Circle, CircleDot, type LucideIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/common/components/ui/select";
import { TableCell } from "@/common/components/ui/table";
import { cn } from "@/common/lib/cn";

import { useTodoContext } from "@/model/todo/hooks/context";
import { usePatchTodo } from "@/model/todo/hooks/patch";
import { TodoStatus } from "@/model/todo/type";

const TODO_STATUS_MAP = {
  done: {
    label: "Done",
    Icon: CheckCircle2,
    color: "text-green-600",
  },
  doing: {
    label: "Doing",
    Icon: CircleDot,
    color: "text-orange-600",
  },
  todo: {
    label: "Todo",
    Icon: Circle,
    color: "text-sky-600",
  },
} satisfies Record<
  TodoStatus,
  { label: string; Icon: LucideIcon; color: string }
>;

export const TodoStatusCell = () => {
  const todoContext = useTodoContext();
  const { todo, setStatus } = usePatchTodo(todoContext);

  return (
    <TableCell>
      <Select value={todo.status} onValueChange={setStatus}>
        <SelectTrigger>
          <SelectValue placeholder="set me" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(TODO_STATUS_MAP).map(
            ([status, { label, Icon, color }]) => (
              <SelectItem key={status} value={status}>
                <div className={cn("flex items-center gap-4", color)}>
                  <Icon size={16} />
                  <span>{label}</span>
                </div>
              </SelectItem>
            ),
          )}
        </SelectContent>
      </Select>
    </TableCell>
  );
};
