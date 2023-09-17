import { useQueryClient, useMutation } from "@tanstack/react-query";
import { isDefined } from "remeda";

import { createOk, isErr, unwrapOk } from "@/common/lib/result";

import type { TodosQueryResult } from "@/model/todo/query";
import { TODO_QUERY_KEY } from "@/model/todo/query";
import { deleteTodo } from "@/model/todo/query/delete";

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onMutate: async (todo) => {
      await queryClient.cancelQueries({ queryKey: [TODO_QUERY_KEY.getList] });
      const prev = queryClient.getQueryData([TODO_QUERY_KEY.getList]);
      queryClient.setQueryData<TodosQueryResult>(
        [TODO_QUERY_KEY.getList],

        (old) => {
          if (!isDefined(old)) return createOk([]);
          if (isErr(old)) return createOk([]);
          return createOk(
            [...unwrapOk(old)].filter(({ id }) => todo.id !== id)
          );
        }
      );

      return { prev };
    },
    onError: (_err, _newTodo, context) => {
      queryClient.setQueryData([TODO_QUERY_KEY.getList], context?.prev);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [TODO_QUERY_KEY.getList] });
    },
  });
};
