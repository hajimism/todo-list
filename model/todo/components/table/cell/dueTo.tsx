"use client";

import { CalendarIcon } from "lucide-react";
import { useCallback } from "react";

import { useDialog } from "@/common/components/functional/dialog";
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
import { isErr } from "@/common/lib/result";

import { useEditTodoItem, useTodoContext } from "@/model/todo/hooks";
import type { TodoDueTo } from "@/model/todo/type";

export const TodoDueToCell = () => {
  const todoContext = useTodoContext();
  const { todo, setDueTo } = useEditTodoItem(todoContext);
  const { dueTo } = todo;
  const { openErrorDialog } = useDialog();

  const isDead = isDefined(dueTo) && hasDatePassed(dueTo);

  const onSelect = useCallback(
    async (date: TodoDueTo) => {
      const result = await setDueTo(date);
      if (isErr(result)) {
        openErrorDialog();
      }
    },
    [openErrorDialog, setDueTo]
  );

  return (
    <TableCell>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"ghost"}
            className={cn(
              "w-full justify-start text-left",
              isDead && "text-destructive hover:text-destructive",
              !dueTo && "text-muted-foreground hover:text-muted-foreground"
            )}
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {dueTo ? (
              <time>{format(dueTo, "yyyy-MM-dd")}</time>
            ) : (
              <span>set me</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0'>
          <Calendar
            mode='single'
            selected={dueTo}
            onSelect={onSelect}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </TableCell>
  );
};
