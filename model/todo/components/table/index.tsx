"use client";

import { Plus, Trash2 } from "lucide-react";
import { FC } from "react";

import { Button } from "@/common/components/ui/button";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  Table,
  TableCell,
} from "@/common/components/ui/table";

import type { Todo } from "@/model/todo/";
import { TodoContext, useManageTodos } from "@/model/todo/hooks";

import {
  TodoTitleCell,
  TodoStatusCell,
  TodoDueToCell,
  TodoAssigneeCell,
} from "./cell";

type Props = {
  todos: Todo[];
};

export const TodoTable: FC<Props> = ({ todos }) => {
  const { todosState, addTodo, removeTodo } = useManageTodos(todos);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Due to</TableHead>
          <TableHead>Assignee</TableHead>
          <TableHead>
            <Button
              variant='ghost'
              className='rounded-full px-2'
              onClick={addTodo}
            >
              <Plus />
            </Button>
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {todosState.map((todo) => (
          <TodoContext.Provider value={todo} key={todo.id}>
            <TableRow>
              <TodoTitleCell />
              <TodoStatusCell />
              <TodoDueToCell />
              <TodoAssigneeCell />
              <TableCell className='font-medium'>
                <Button
                  variant='ghost'
                  className='px-2'
                  onClick={() => removeTodo(todo)}
                >
                  <Trash2 className='text-muted-foreground' />
                </Button>
              </TableCell>
            </TableRow>
          </TodoContext.Provider>
        ))}
      </TableBody>
    </Table>
  );
};
