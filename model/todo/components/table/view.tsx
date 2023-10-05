import type { FC } from "react";

import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  Table,
} from "@/common/components/ui/table";
import { isEmpty } from "@/common/lib/guard";

import type { Todo } from "@/model/todo/";
import { CreateNewTodoButton } from "@/model/todo/components/table/create-new-button";
import { TodoTableRow } from "@/model/todo/components/table/row";

type Props = {
  todos: Todo[];
};

export const TodoTableView: FC<Props> = ({ todos }) => {
  const isTodoListEmpty = isEmpty(todos);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Due to</TableHead>
          <TableHead>Assignee</TableHead>
          <TableHead>
            <CreateNewTodoButton />
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {todos.map((todo) => (
          <TodoTableRow todo={todo} key={todo.id} />
        ))}
        {isTodoListEmpty && <TableRow>Well done!!</TableRow>}
      </TableBody>
    </Table>
  );
};
