import { TableCell } from "@/common/components/ui/table";
import { format } from "@/common/lib/format";

import { useTodoContext } from "@/model/todo/hooks/context";

export const TodoDueToCell = () => {
  const todo = useTodoContext();

  return <TableCell>{format(todo.dueTo, "yyyy-MM-dd")}</TableCell>;
};
