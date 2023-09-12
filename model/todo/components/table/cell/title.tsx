import { TableCell } from "@/common/components/ui/table";

import { useTodoContext } from "@/model/todo/hooks/context";

export const TodoTitleCell = () => {
  const todo = useTodoContext();

  return <TableCell className="font-medium">{todo.title}</TableCell>;
};
