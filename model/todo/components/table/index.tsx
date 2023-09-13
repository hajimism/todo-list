import { FC } from "react";

import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  Table,
} from "@/common/components/ui/table";

import { Todo } from "@/model/todo/";

import { TodoTableRow } from "./row";

type Props = {
  todos: Todo[];
};

export const TodoTable: FC<Props> = ({ todos }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Title</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Due to</TableHead>
        <TableHead>Assignee</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {todos.map((todo) => (
        <TodoTableRow todo={todo} key={todo.id} />
      ))}
    </TableBody>
  </Table>
);
