import { atom } from "jotai";
import { atomsWithQuery } from "jotai-tanstack-query";

import type { User } from "@/model/user/";
import { hajimism, MOCK_USERS } from "@/model/user/mock";
import { USER_QUERY_KEY, getUsers } from "@/model/user/query";

export const allCollaboratorAtom = atom(MOCK_USERS);

export const currentUserAtom = atom<User | undefined>(hajimism);

export const [allUsersAtom] = atomsWithQuery(() => ({
  queryKey: [USER_QUERY_KEY],
  queryFn: getUsers,
  retry: 2,
}));
