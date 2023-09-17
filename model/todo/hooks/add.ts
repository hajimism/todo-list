import { useQueryClient, useMutation } from "@tanstack/react-query";

import { isDefined } from "@/common/lib/guard";
import { createOk, isErr, unwrapOk } from "@/common/lib/result";

import type { TodosQueryResult } from "@/model/todo/query";
import { TODO_QUERY_KEY } from "@/model/todo/query";
import { addTodo } from "@/model/todo/query/add";

export const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTodo,
    onMutate: async (todo) => {
      await queryClient.cancelQueries({ queryKey: [TODO_QUERY_KEY] });
      const prev = queryClient.getQueryData([TODO_QUERY_KEY]);
      queryClient.setQueryData<TodosQueryResult>([TODO_QUERY_KEY], (old) => {
        if (!isDefined(old)) return createOk([todo]);
        if (isErr(old)) return createOk([todo]);
        return createOk([todo, ...unwrapOk(old)]);
      });

      return { prev };
    },
    onError: (_err, _newTodo, context) => {
      queryClient.setQueryData([TODO_QUERY_KEY], context?.prev);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [TODO_QUERY_KEY] });
    },
  });
};
