"use client";

import { Plus } from "lucide-react";
import { FC } from "react";

import { Button } from "@/common/components/ui/button";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  Table,
} from "@/common/components/ui/table";

import type { Todo } from "@/model/todo/";
import {
  TodoTitleCell,
  TodoStatusCell,
  TodoDueToCell,
  TodoAssigneeCell,
  TodoRemoveCell,
} from "@/model/todo/components/table/cell";
import { TodoContext, useEditTodos } from "@/model/todo/hooks";

type Props = {
  todos: Todo[];
};

export const TodoTable: FC<Props> = ({ todos }) => {
  const { todosState, addTodo, removeTodo } = useEditTodos(todos);

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
              <TodoRemoveCell onRemove={removeTodo} />
            </TableRow>
          </TodoContext.Provider>
        ))}
      </TableBody>
    </Table>
  );
};
