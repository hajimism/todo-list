import { useAtomValue } from "jotai";

import { allUsersAtom } from "@/model/user/atom";

export const useGetUsers = () => useAtomValue(allUsersAtom);
