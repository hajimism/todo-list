import { FC } from "react";

import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/common/components/ui/table";
import { format } from "@/common/lib/format";
import { isDefined } from "@/common/lib/guard";
import { UserAvatar } from "@/model/user/components/avatar";

import { Todo } from "../type";

type Props = {
  todos: Todo[];
};

export const TodoListTable: FC<Props> = ({ todos }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Title</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Assignee</TableHead>
        <TableHead>Due to</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {todos.map((todo) => (
        <TodoListTableItem todo={todo} key={todo.id} />
      ))}
    </TableBody>
  </Table>
);

type Item = {
  todo: Todo;
};

const TodoListTableItem: FC<Item> = ({ todo }) => {
  return (
    <TableRow>
      <TableCell className="font-medium">{todo.title}</TableCell>
      <TableCell>{todo.status}</TableCell>
      <TableCell>
        {isDefined(todo.assignee) && <UserAvatar user={todo.assignee} />}
      </TableCell>
      <TableCell>{format(todo.dueTo, "yyyy-MM-dd")}</TableCell>
    </TableRow>
  );
};
