import { useQuery } from "@tanstack/react-query";

import { USER_QUERY_KEY, getUsers } from "@/model/user/query";

export const useGetUsers = () =>
  useQuery({
    queryKey: [USER_QUERY_KEY],
    queryFn: getUsers,
    retry: 2,
  });
