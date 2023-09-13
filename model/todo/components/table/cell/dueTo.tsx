"use client";

import { CalendarIcon } from "lucide-react";

import { Button } from "@/common/components/ui/button";
import { Calendar } from "@/common/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/common/components/ui/popover";
import { TableCell } from "@/common/components/ui/table";
import { cn } from "@/common/lib/cn";
import { format } from "@/common/lib/date";
import { hasDatePassed } from "@/common/lib/date/hasDatePassed";
import { isDefined } from "@/common/lib/guard";

import { useTodoContext } from "@/model/todo/hooks/context";
import { usePatchTodo } from "@/model/todo/hooks/patch";

export const TodoDueToCell = () => {
  const todoContext = useTodoContext();
  const { todo, setDueTo } = usePatchTodo(todoContext);
  const { dueTo } = todo;

  const isDead = isDefined(dueTo) && hasDatePassed(dueTo);

  return (
    <TableCell>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"ghost"}
            className={cn(
              "w-full justify-start text-left",
              !isDead && "text-destructive hover:text-destructive",
              !dueTo && "text-muted-foreground hover:text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dueTo ? (
              <time>{format(dueTo, "yyyy-MM-dd")}</time>
            ) : (
              <span>set me</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={dueTo}
            onSelect={setDueTo}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </TableCell>
  );
};
