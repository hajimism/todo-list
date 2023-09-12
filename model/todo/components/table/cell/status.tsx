import { TableCell } from "@/common/components/ui/table";

import { useTodoContext } from "@/model/todo/hooks/context";

export const TodoStatusCell = () => {
  const todo = useTodoContext();

  return <TableCell>{todo.status}</TableCell>;
};
