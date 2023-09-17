import { useQuery } from "@tanstack/react-query";

import { TODO_QUERY_KEY, getTodos } from "@/model/todo/query";

export const useGetTodos = () =>
  useQuery({
    queryKey: [TODO_QUERY_KEY.getList],
    queryFn: getTodos,
    cacheTime: 0,
  });
